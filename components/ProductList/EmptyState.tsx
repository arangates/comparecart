import Link from 'next/link';
export function EmptyState() {
  return (
    <div className='flex h-screen/2'>
      <div className='m-auto'>
        <h1 className='text-gray-600 text-2xl h-10 dark:text-gray-400'>
          Please add items to cart
        </h1>
        <Link href='/'>
          <button
            type='submit'
            className='mt-8 md:mt-0 bg-royalblue-500 hover:bg-royalblue-400 text-white font-bold rounded-full ml-5 py-3 px-16'
          >
            Add now
          </button>
        </Link>
      </div>
    </div>
  );
}
