import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputName: '',
      inputEmail: '',
      inputTextArea: '',
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
        <label>
          Nome:
          <input type="text" name="inputName" value={this.state.inputName} onChange={this.handleChange}/>
        </label>
        <label>
          E-mail:
          <input type="email" name="inputEmail" value={this.state.inputEmail} onChange={this.handleChange}/>
        </label>
        <label>
          Diga algo sobre você:
          <textarea name="inputTextArea" value={this.state.inputTextArea} onChange={this.handleChange}/>
        </label>
      </form>
    )
  }

}

export default Form;