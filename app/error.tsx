'use client'

import { useEffect } from 'react'
import errorIcon from '@/assets/images/errorImage.png'
import Image from 'next/image'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col gap-[10px] items-center justify-center mr-25 ml-25 mt-40 '>
       <div className='w-[150px] h-[110px]'>
          <Image src={errorIcon} alt='error' />
       </div>
       <div className='text-primary-bg text-3xl' >
           <h2>OOps! </h2>
       </div>
       <div className='text-2xl'>
           <h2>An Unexpected Error Occurred.</h2>
       </div>
       <div className='flex gap-2 text-2xl'>
          <div>
             <p>Reload this page or</p>
          </div>
          <div >
            <div className=' text-white text-lg rounded-md p-1 bg-[#4318FF] flex'>
              <button onClick={() => reset()} > Try again  </button>
            </div>
        </div>
      </div>
    </div>
  )
}