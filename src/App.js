import React from 'react';
import Input from './Input';
import Select from './Select';
import { inexgroup } from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Example',
      post: 'Example',
      email: 'Example',
      phone: 'Example',
      signatureTemplate: inexgroup
    };
  }

  handleChange = (event) => {
    this.setState((prevState) => ({
      prevState,
      [event.target.id]: event.target.value
    }), () => {
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let signature = document.querySelector('.currentSignature');
    signature.querySelector('#name').textContent = this.state.name;
    signature.querySelector('#post').textContent = this.state.post;
    signature.querySelector('#email').textContent = this.state.email;
    signature.querySelector('#phone').textContent = this.state.phone;
    let blob = new Blob([signature.innerHTML], {type: 'text/html'});
    let link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', this.state.email.split(('.com'[0]) || ('.ru')[0]));
    link.click();
  }

  render() {

    return (
      <>
        <form className='form' onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Select className='select' id="signatureTemplate" />
          <Input id="name" label="Имя Фамилия:" />
          <Input id="post" label="Должность:" />
          <Input id="email" label="Почтовый адрес:" />
          <Input id="phone" label="Телефон:" />
          <button type='submit' className='button' onClick={this.createSignatureElement}>Сгенерировать</button>
        </form>
        <div className='currentSignature' style={{ display: "none" }}>{this.state.signatureTemplate}</div>
      </>
    );
    
  }
}

export default App;