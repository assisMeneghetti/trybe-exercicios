import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      clicksLeftBtn: 0,
      clicksCenterBtn: 0,
      clicksRightBtn: 0,
    }

    this.handleClickLeftBtn = this.handleClickLeftBtn.bind(this)
    this.handleClickRightBtn = this.handleClickRightBtn.bind(this)
    this.handleClickCenterBtn = this.handleClickCenterBtn.bind(this)
  }

  handleClickLeftBtn = () => {
    this.setState(({clicksLeftBtn}) => ({
      clicksLeftBtn: clicksLeftBtn + 1
    }))
  }

  handleClickCenterBtn = () => {
    this.setState((previousState, _prop) => ({
      clicksCenterBtn: previousState.clicksCenterBtn + 1
    }))
  }

  handleClickRightBtn = () => {
    this.setState(({clicksRightBtn}) => ({
      clicksRightBtn: clicksRightBtn + 1
    }))
  }

  changeBtnColor = (num) => {
    return num % 2 === 0 ? 'green' : 'tomato';
  }

  render () {
    const { clicksLeftBtn, clicksCenterBtn, clicksRightBtn } = this.state;
    return (
      <div className="btn-container">
        <button className="btn" 
          onClick={ this.handleClickLeftBtn }
          style={{ backgroundColor: this.changeBtnColor(clicksLeftBtn) }}
        >
        {this.state.clicksLeftBtn}
        </button>
        <button className="btn" 
          onClick={ this.handleClickCenterBtn }
          style={{ backgroundColor: this.changeBtnColor(clicksCenterBtn) }}
          >
          {this.state.clicksCenterBtn}</button>
        <button className="btn" 
          onClick={ this.handleClickRightBtn }
          style={{ backgroundColor: this.changeBtnColor(clicksRightBtn) }}
          >
          {this.state.clicksRightBtn}</button>
      </div>
    );
  }
}

export default App;