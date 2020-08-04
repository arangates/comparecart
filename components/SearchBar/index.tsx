import React from 'react';

const Search = ({ fetchProducts }: any) => {
  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    fetchProducts(event.target.elements.search.value);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className='md:flex relative py-5'>
          <input
            id='search'
            name='search'
            type='text'
            className='text-sm sm:text-base placeholder-gray-600 pl-10 pr-4 rounded-full max-w-md border border-gray-300 w-full h-12 focus:outline-none focus:border-purple-400'
            placeholder='Books'
          />
          <button
            type='submit'
            className='bg-indigo-700 hover:bg-indigo-400 text-white text-md font-bold rounded-full ml-5 py-1 px-16'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
