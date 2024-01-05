import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col items-center  '>
        <h2 className='text-9xl font-bold text-[#4318FF] my-2'>404</h2>
        <p className='text-6xl mb-2'>Page not found</p>
        <p className='text-xl mb-4'>
          Sorry, the page you are looking for could not be found
        </p>
        <Link className='text-white text-lg rounded-lg p-3 bg-[#4318FF]' href='/'>
          Return Home
        </Link>
      </div>
    </section>
  );
}
