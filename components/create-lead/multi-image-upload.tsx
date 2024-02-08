import { LeadService } from '@/services/lead-services';
import { CameraIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileWithPreview extends File {
  preview: string;
}

interface DropzoneProps {
  onChange: any;
  onPendingChange: (pending: boolean) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onChange, onPendingChange }) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const [prevFiles, setPrevFiles] = useState<FileWithPreview[]>([]);

  const [imageInfo, setImageInfo] = useState<FileWithPreview[]>([]);

  const { data } = useSession();
  // @ts-ignore
  const token = data?.user?.access_token;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setFiles((previousFiles) => [...previousFiles, ...filesWithPreview]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxSize: 1024 * 1024,
    onDrop,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (previewToRemove: string) => {
    setFiles((files) => files.filter((file) => file.preview !== previewToRemove));
  };

  useEffect(() => {
    // Check if files have changed since the last upload
    if (files.length >= 0 && !areFilesEqual(files, prevFiles)) {
      handleImageChange(files);
      setPrevFiles(files); // Update prevFiles with the current files
    }
  }, [files, prevFiles]);

  // Utility function to check if two arrays of files are equal
  const areFilesEqual = (files1: FileWithPreview[], files2: FileWithPreview[]) => {
    if (files1.length !== files2.length) {
      return false;
    }
    for (let i = 0; i < files1.length; i++) {
      if (files1[i].name !== files2[i].name || files1[i].size !== files2[i].size) {
        return false;
      }
    }
    return true;
  };

  const handleImageChange = async (files: File[]) => {
    try {
      onPendingChange(true);
      const formData = new FormData();
      files.forEach((file) => formData.append('pic', file));
      const NewLeadServices = new LeadService();
      const response = await NewLeadServices.UploadLeadImage(formData, token);
      const imageInfo = response.data.Data.map((item: any) => {
        return item; // Return each image info object
      });
      onChange(imageInfo); // Call onChange with the array of image info objects
      setImageInfo(imageInfo);
      if (response.status === 'pending') {
        console.log('Server response is pending');
        onPendingChange(true);
      } else {
        onPendingChange(false);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form>
      <div className='flex flex-wrap gap-2 justify-right items-center border-dashed border-2 border-neutral-200 p-5 rounded-lg w-full'>
        <div>
          <ul className='flex flex-wrap gap-2'>
            {files.map((file) => (
              <li
                className='relative shadow-lg border-2 border-neutral-200 w-full h-full rounded-lg'
                key={file.name}
                style={{ width: '120px', height: '120px' }}>
                <Image
                  className='h-full w-full object-contain rounded-md'
                  src={file.preview}
                  alt={file.name}
                  width={100}
                  height={100}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
                <button
                  type='button'
                  className='w-5 h-5 border border-secondary-400 bg-red-100 rounded-full flex justify-center items-center absolute -top-2 -right-2 hover:bg-red-600 transition-colors'
                  onClick={() => removeFile(file.preview)}>
                  <XMarkIcon className='w-4 h-4 font-bold fill-red-600 hover:fill-white transition-colors' />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div {...getRootProps({})}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the images here ...</p>
          ) : (
            <div className='flex flex-col justify-center items-center border-dashed border-2 border-neutral-200 p-2 rounded-lg overflow-hidden w-[100px] h-[100px] 2xl:w-[120px] 2xl:h-[120px]'>
              <div>
                <CameraIcon className='w-[40px] 2xl:w-[60px] h-[40px] 2xl:h-[60px] font-bold fill-gray-300 transition-colors' />
              </div>
              <div className='font-bold text-gray-300 text-sm 2xl:text-[16px]'>
                {imageInfo.length === 0 ? 'No Image' : 'Add More'}
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Dropzone;
