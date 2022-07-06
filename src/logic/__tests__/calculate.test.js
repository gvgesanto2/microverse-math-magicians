import calculate from '../calculate';

const DEFAULT_CALCULATOR_DATA = {
  next: null,
  total: null,
  operation: null,
};

describe('calculate() function', () => {
  it('should return the default calculator data when buttonName is equal to \'AC\'', () => {
    const testingCalculatorData = {
      next: '123',
      total: '22',
      operation: '+',
    };

    const updatedCalculatorData = calculate(testingCalculatorData, 'AC');

    expect(updatedCalculatorData).toEqual(DEFAULT_CALCULATOR_DATA);
  });

  it('should return the correct next value when receiving numbers as the buttonName', () => {
    let expectedNextValue = '';
    let updatedCalculatorData = DEFAULT_CALCULATOR_DATA;

    for (let i = 1; i <= 3; i += 1) {
      expectedNextValue = `${expectedNextValue}${i}`;
      updatedCalculatorData = calculate(updatedCalculatorData, String(i));
    }

    expect(updatedCalculatorData).toEqual({
      next: expectedNextValue,
      total: null,
    });
  });

  it('should return an empty object when receiving the number 0 as the buttonName with the next property also equal to 0', () => {
    const testingCalculatorData = {
      next: '0',
      total: null,
      operation: null,
    };

    const updatedCalculatorData = calculate(testingCalculatorData, '0');

    expect(updatedCalculatorData).toEqual({});
  });
});
