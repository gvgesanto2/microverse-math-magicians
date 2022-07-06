import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './calculator.component';

let component;

describe('Calculator component', () => {
  beforeEach(() => {
    component = render(<Calculator />);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display \'0\' by default', () => {
    const calculatorDisplay = screen.getByTestId('calculator-display');

    expect(calculatorDisplay).toHaveTextContent('0');
  });

  it('should clear the whole operation when clicking the \'AC\' button', () => {
    const NUM_ITERATIONS = 3;
    let displayedNumber = '';
    const calculatorDisplay = screen.getByTestId('calculator-display');
    const ACButton = screen.getByRole('button', { name: 'AC' });

    for (let i = 1; i <= NUM_ITERATIONS; i += 1) {
      displayedNumber = `${displayedNumber}${i}`;
      const numberButton = screen.getByRole('button', { name: String(i) });

      userEvent.click(numberButton);
    }

    expect(calculatorDisplay).toHaveTextContent(displayedNumber);

    userEvent.click(ACButton);

    expect(calculatorDisplay).toHaveTextContent('0');
  });

  it('should display the correct operation on the screen', () => {
    const NUM_ITERATIONS = 3;
    let expectedResult = '';
    const operationPressed = '+';
    const calculatorDisplay = screen.getByTestId('calculator-display');

    for (let i = 1; i <= NUM_ITERATIONS; i += 1) {
      expectedResult = `${expectedResult}${i}`;
      const numberButton = screen.getByRole('button', { name: String(i) });

      userEvent.click(numberButton);
    }

    expect(calculatorDisplay).toHaveTextContent(expectedResult);

    expectedResult = `${expectedResult} ${operationPressed}`;
    const plusButton = screen.getByRole('button', { name: operationPressed });
    userEvent.click(plusButton);

    expect(calculatorDisplay).toHaveTextContent(expectedResult);

    expectedResult += ' ';

    for (let i = 1; i <= NUM_ITERATIONS * 2; i += 1) {
      expectedResult = `${expectedResult}${i}`;
      const numberButton = screen.getByRole('button', { name: String(i) });

      userEvent.click(numberButton);
    }

    expect(calculatorDisplay).toHaveTextContent(expectedResult);
  });

  it('should display the correct operation RESULT on the screen', () => {
    const NUM_ITERATIONS = 3;
    let expectedResult;
    let displayedNumber = '';
    const operationPressed = '+';
    const calculatorDisplay = screen.getByTestId('calculator-display');
    const equalButton = screen.getByRole('button', { name: '=' });

    for (let i = 1; i <= NUM_ITERATIONS; i += 1) {
      displayedNumber = `${displayedNumber}${i}`;
      const numberButton = screen.getByRole('button', { name: String(i) });

      userEvent.click(numberButton);
    }

    expectedResult = Number(displayedNumber);
    displayedNumber = '';
    const plusButton = screen.getByRole('button', { name: operationPressed });
    userEvent.click(plusButton);

    for (let i = 1; i <= NUM_ITERATIONS * 2; i += 1) {
      displayedNumber = `${displayedNumber}${i}`;
      const numberButton = screen.getByRole('button', { name: String(i) });

      userEvent.click(numberButton);
    }

    expectedResult += Number(displayedNumber);
    userEvent.click(equalButton);

    expect(calculatorDisplay).toHaveTextContent(expectedResult);
  });
});
