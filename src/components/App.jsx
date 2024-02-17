import React, { Component } from 'react';
import FormInput from './FormInput/FormInput';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <div
          style={{
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          <FormInput />
        </div>
      </>
    );
  }
}

export default App;
