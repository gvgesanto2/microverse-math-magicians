/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ButtonsGrid from '../buttons-grid/buttons-grid.component';

import './calculator.styles.scss';

export default class Calculator extends React.Component {
  render() {
    const buttonsRows = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];

    return (
      <div className="calculator">
        <div className="calculator__display">0</div>
        <ButtonsGrid buttonsRows={buttonsRows} />
      </div>
    );
  }
}
