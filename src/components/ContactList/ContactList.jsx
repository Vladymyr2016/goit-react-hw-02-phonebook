import React from 'react';
import Contact from 'components/Contact/Contact';

const ContactList = ({ people = [], onDeleteContact }) => {
  return (
    <>
      <ul>
        <div>
          {people.map(man => {
            return (
              <Contact
                key={man.id}
                {...man}
                onDeleteContact={onDeleteContact}
              />
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default ContactList;
