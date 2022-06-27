/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from '../button/button.component';

import './calculator.styles.scss';

export default class Calculator extends React.Component {
  render() {
    const calculatorRows = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];

    return (
      <div className="calculator">
        <div className="calculator__display">0</div>
        <div className="calculator__buttons-grid">
          {calculatorRows.map((calcRow) => (
            <>
              {calcRow.map((calcButtonName, btnIndex) => (
                <Button
                  key={calcButtonName}
                  buttonData={{
                    name: calcButtonName,
                    isPrimary: btnIndex === calcRow.length - 1,
                    addtionalClasses: `calculator__grid-cell ${
                      calcButtonName === '0' ? 'calculator__grid-cell--lg' : ''
                    }`,
                  }}
                />
              ))}
            </>
          ))}
        </div>
      </div>
    );
  }
}
