import React from 'react';

const ItemList = () => {
  const items = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} data-testid="item">{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
