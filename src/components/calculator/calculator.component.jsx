/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../../logic/calculate';
import ButtonsGrid from '../buttons-grid/buttons-grid.component';

import './calculator.styles.scss';

const DEFAULT_DISPLAYED_INFO = '0';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.calculatorData = {
      total: null,
      next: null,
      operation: null,
    };
    this.state = {
      displayedInfo: DEFAULT_DISPLAYED_INFO,
    };
  }

  handleCalculation = (buttonName) => {
    const { total, next, operation } = calculate(
      this.calculatorData,
      buttonName,
    );
    this.calculatorData = { total, next, operation };

    if (!total && !next && !operation) {
      return this.setState({ displayedInfo: DEFAULT_DISPLAYED_INFO });
    }

    return this.setState({ displayedInfo: next || total });
  };

  render() {
    const buttonsRows = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    const { displayedInfo } = this.state;

    return (
      <div className="calculator">
        <div className="calculator__display">{displayedInfo}</div>
        <ButtonsGrid
          buttonsRows={buttonsRows}
          handleClickCallback={this.handleCalculation}
        />
      </div>
    );
  }
}
