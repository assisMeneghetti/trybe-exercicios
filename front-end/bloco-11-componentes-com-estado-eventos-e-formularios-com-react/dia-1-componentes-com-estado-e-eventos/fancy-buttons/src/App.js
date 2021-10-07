import React from 'react';
import './App.css';

function handleClickLeftBtn() {
  console.log('Botão da esquerda');
}

function handleClickCenterBtn() {
  console.log('Botão do meio');
}

function handleClickRightBtn() {
  console.log('Botão da direita');
}

class App extends React.Component {
  render () {
    return (
      <div className="btn-container">
        <button onClick={handleClickLeftBtn}>Esqueda</button>
        <button onClick={handleClickCenterBtn}>Centro</button>
        <button onClick={handleClickRightBtn}>Direita</button>
      </div>
    );
  }
}

export default App;