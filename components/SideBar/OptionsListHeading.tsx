interface Iprops {
  title: string;
}

const OptionsListHeading = ({ title }: Iprops) => {
  return (
    <li className='my-px'>
      <span className='flex font-semibold text-sm blue-gray-300 px-4 my-4 text-gray-600  uppercase'>
        {title}
      </span>
    </li>
  );
};

export default OptionsListHeading;
