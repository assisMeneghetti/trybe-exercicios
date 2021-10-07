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
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((previousState, _props) => ({
      clicksLeftBtn: previousState.clicksLeftBtn + 1
    }))
  }

  handleClickCenterBtn = () => {
    this.setState((previousState, _props) => ({
      clicksCenterBtn: previousState.clicksCenterBtn + 1
    }))
  }

  handleClickRightBtn = () => {
    this.setState((previousState, _props) => ({
      clicksRightBtn: previousState.clicksRightBtn + 1
    }))
  }


  render () {
    return (
      <div className="btn-container">
        <button className="btn" onClick={this.handleClickLeftBtn}>{this.state.clicksLeftBtn}</button>
        <button className="btn" onClick={this.handleClickCenterBtn}>{this.state.clicksCenterBtn}</button>
        <button className="btn" onClick={this.handleClickRightBtn}>{this.state.clicksRightBtn}</button>
      </div>
    );
  }
}

export default App;