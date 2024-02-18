import React from 'react';
import s from './FormInput.module.css';

const FormInput = ({ name, number, handleSubmit, handleChange }) => {
  return (
    <div className={s.formInput}>
      <form onSubmit={handleSubmit}>
        <p className={s.name}>Name</p>
        <input type="text" name="name" required onChange={handleChange} />
        <input type="tel" name="number" required onChange={handleChange} />
        <p className={s.name}>Number</p>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default FormInput;
