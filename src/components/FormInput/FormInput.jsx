import React from 'react';
import s from './FormInput.module.css';

const FormInput = () => {
  return (
    <div className={s.formInput}>
      <p>Name</p>
      <input type="text" name="name" required />
      <button type="submit">Add contact</button>
    </div>
  );
};

export default FormInput;
