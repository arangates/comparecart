export function Avatar() {
  return (
    <div className='px-5 py-5 sm:py-0 sm:ml-4 sm:px-0 mr-5'>
      <div className='hidden sm:block'>
        <span className='block h-8 w-8 overflow-hidden rounded-full border-2 border-gray-600 xl:border-gray-300'>
          <img
            loading='lazy'
            className='h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
            alt='avatar'
          />
        </span>
      </div>
    </div>
  );
}
