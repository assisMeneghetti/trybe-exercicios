import React from "react";
import NameInput from './NameInput'

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputName: '',
      inputEmail: '',
      inputTextArea: '',
      inputCheckbox: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,  
    });
  }

  render() {
    return (
      <form>
        <NameInput value={this.state.inputName} handleChange={this.handleChange} />
        <label>
          E-mail:
          <input type="email" name="inputEmail" value={this.state.inputEmail} onChange={this.handleChange}/>
        </label>
        <label>
          Diga algo sobre você:
          <textarea name="inputTextArea" value={this.state.inputTextArea} onChange={this.handleChange}/>
        </label>
        <label>
          Concorda com os termos:
          <input name="inputCheckbox" type="checkbox" checked={this.state.inputCheckbox} onChange={this.handleChange}/>
        </label>
        <label>
          Anexe uma foto sua:
          <input name="inputFile" type="file"/>
        </label>
      </form>
    )
  }
}

export default Form;