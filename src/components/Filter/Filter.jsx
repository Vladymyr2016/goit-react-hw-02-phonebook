import React from 'react';

const Filter = ({ searchValue, handleFilterContact }) => {
  return (
    <>
      <p>find contacts by name</p>
      <input
        type="text"
        onChange={e => handleFilterContact(e.target.value)}
        value={searchValue}
      />
    </>
  );
};

export default Filter;
