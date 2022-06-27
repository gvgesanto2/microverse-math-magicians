/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.scss';
import Calculator from './components/calculator/calculator.component';

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
