import NoImageAvailableImage from '@/assets/images/no-image-available.png';
import { XMarkIcon, CameraIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileWithPreview extends File {
  preview: string;
}

interface DropzoneProps {
  onImagesChange: (files: FileWithPreview[]) => void;
  className: any;
}

const Dropzone: React.FC<DropzoneProps> = ({ onImagesChange, className }) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

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

  useEffect(() => {
    if (files.length > 0) {
      onImagesChange(files);
    }
  }, [files, onImagesChange]);

  const removeFile = (name: any) => {
    setFiles((files) => files.filter((file) => file.name !== name));
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
                  onClick={() => removeFile(file.name)}>
                  <XMarkIcon className='w-4 h-4 font-bold fill-red-600 hover:fill-white transition-colors' />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div
          {...getRootProps({
            // className: className,
          })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the images here ...</p>
          ) : (
            // <p>Drag and drop some files here, or click to select files</p>
            <div className='flex flex-col justify-center items-center border-dashed border-2 border-neutral-200 p-2 rounded-lg overflow-hidden w-[120px] h-[120px]'>
              <div>
                <CameraIcon className='w-[60px] h-[60px] font-bold fill-gray-300 transition-colors' />
              </div>
              <div className='font-bold text-gray-300'>No Image</div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Dropzone;
