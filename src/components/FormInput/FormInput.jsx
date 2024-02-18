import React from 'react';
import s from './FormInput.module.css';

const FormInput = () => {
  return (
    <div className={s.formInput}>
      <form>
        <p className={s.name}>Name</p>
        <input type="text" name="name" required />
        <input type="tel" name="number" required />
        <p className={s.name}>Number</p>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default FormInput;
