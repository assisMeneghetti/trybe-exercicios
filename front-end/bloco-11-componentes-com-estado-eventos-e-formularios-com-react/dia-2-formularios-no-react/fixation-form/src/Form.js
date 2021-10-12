import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputedText: ''
    };
  }

  handleChange(event) {
    this.setState({
      inputedText: event.target.value,  
    });
  }

  render() {
    return (
      <form>
        <label>
          Diga algo sobre você:
          <textarea value={this.state.inputedText} onChange={this.handleChange}/>
        </label>
      </form>
    )
  }

}

export default Form;