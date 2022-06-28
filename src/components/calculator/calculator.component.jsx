import { useState } from 'react';

import calculate from '../../logic/calculate';
import ButtonsGrid from '../buttons-grid/buttons-grid.component';

import './calculator.styles.scss';

const DEFAULT_DISPLAYED_INFO = '0';
const DEFAULT_CALCULATOR_DATA = {
  total: null,
  next: null,
  operation: null,
};

const buttonsRows = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState(DEFAULT_CALCULATOR_DATA);
  const [displayedInfo, setDisplayedInfo] = useState(DEFAULT_DISPLAYED_INFO);

  const handleCalculation = (buttonName) => {
    const { total, next, operation } = calculate(calculatorData, buttonName);
    setCalculatorData({ total, next, operation });

    if (!total && !next && !operation) {
      return setDisplayedInfo(DEFAULT_DISPLAYED_INFO);
    }

    return setDisplayedInfo(next || total);
  };

  return (
    <div className="calculator">
      <div className="calculator__display">{displayedInfo}</div>
      <ButtonsGrid
        buttonsRows={buttonsRows}
        handleClickCallback={handleCalculation}
      />
    </div>
  );
};

export default Calculator;
