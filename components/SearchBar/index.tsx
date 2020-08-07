import React from 'react';

const Search = ({ fetchProducts }: any) => {
  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    fetchProducts(event.target.elements.search.value);
  };

  return (
      <form onSubmit={handleOnSubmit}>
        <div className='flex flex-col md:flex-row items-center md:items-start relative py-1 md:py-5'>
          <input
            id='search'
            name='search'
            type='text'
            className='text-sm sm:text-base placeholder-gray-600 pl-10 pr-4 rounded-full max-w-md border border-gray-300 w-full h-10 md:h-12 focus:outline-none focus:border-purple-400'
            placeholder='Books'
          />
          <button
            type='submit'
            className='mt-2 md:mt-0 bg-indigo-700 hover:bg-indigo-400 text-white font-bold rounded-full ml-5 py-2 px-16'
          >
            Search
          </button>
        </div>
      </form>
  );
};

export default Search;
