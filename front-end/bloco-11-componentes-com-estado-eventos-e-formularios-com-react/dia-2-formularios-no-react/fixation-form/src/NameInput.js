import React from "react";

class NameInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
          Nome:
          <input 
          type="text" 
          name="inputName" 
          value={value} onChange={handleChange}/>
      </label>
    )
  }
}

export default NameInput;
