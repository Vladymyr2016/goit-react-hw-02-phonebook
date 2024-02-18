import React from 'react';

const ContactList = ({ people }) => {
  return (
    <>
      <p>find contacts by name</p>
      <input type="text" />
      <ul>
        <div>
          {people.map(man => {
            return <li key={man.id}>{man.name}</li>;
          })}
        </div>
      </ul>
    </>
  );
};

export default ContactList;

// import React, { Component } from 'react';

// class ContactList extends Component {
//   render() {
//     return (
//       <>
//         <p>find contacts by name</p>
//         <input type="text" />
//         <ul>
//           <div>
//             {}
//             {/* <li key={id}>Vladymyr</li> */}
//             <li>Vladymyr</li>
//           </div>
//         </ul>
//       </>
//     );
//   }
// }

// export default ContactList;
