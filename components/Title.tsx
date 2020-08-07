interface Iprops {
  title?: string;
  subTitle?: string;
  htmlFor?: string;
}

const Title = ({ title, subTitle, htmlFor }: Iprops) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className='hidden md:block text-2xl h-10 text-gray-800'
      >
        {title ? title : 'Search for a product'}
      </label>
      {subTitle ? (
        <h2 className='text-gray-600 h-5 dark:text-gray-400'>{subTitle}</h2>
      ) : (
        ''
      )}
    </>
  );
};

export default Title;
