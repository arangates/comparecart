import React from 'react';

interface IProps {
  item: { id: number; name: string };
}

const ProductListHeader = ({ item }: IProps) => {
  return (
    <span key={item.id} className='hidden md:flex items-center'>
      {item.name}
    </span>
  );
};

export default ProductListHeader;
