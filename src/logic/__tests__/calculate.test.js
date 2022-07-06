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

  it('should return the correct next value when receiving numbers as the buttonName with a non-null operation and total', () => {
    const testingCalculatorData = {
      next: null,
      total: '56',
      operation: '+',
    };
    let expectedNextValue = '';
    let updatedCalculatorData = testingCalculatorData;

    for (let i = 1; i <= 3; i += 1) {
      expectedNextValue = `${expectedNextValue}${i}`;
      updatedCalculatorData = calculate(updatedCalculatorData, String(i));
    }

    expect(updatedCalculatorData).toEqual({
      ...testingCalculatorData,
      next: expectedNextValue,
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

  it('should return the correct operation result when receiving \'=\' as the buttonName', () => {
    const testingCalculatorData = {
      next: '123',
      total: '123',
      operation: '+',
    };
    const expectedTotal = String(
      Number(testingCalculatorData.next) + Number(testingCalculatorData.total),
    );

    const updatedCalculatorData = calculate(testingCalculatorData, '=');

    expect(updatedCalculatorData).toEqual({
      total: expectedTotal,
      next: null,
      operation: null,
    });
  });

  it('should save the operation when the user presses an operation after pressing \'=\'', () => {
    const testingCalculatorData = {
      next: null,
      total: '123',
      operation: null,
    };
    const operationPressed = '+';

    const updatedCalculatorData = calculate(testingCalculatorData, operationPressed);

    expect(updatedCalculatorData).toEqual({
      ...testingCalculatorData,
      operation: operationPressed,
    });
  });

  it('should change the operation when user presses an operation button and there is an existing operation', () => {
    const testingCalculatorData = {
      next: null,
      total: '123',
      operation: '-',
    };
    const testingCalculatorDataWithoutTotal = {
      operation: '-',
      total: 0,
    };
    const operationPressed = '+';

    const updatedCalculatorData = calculate(testingCalculatorData, operationPressed);
    const updatedCalculatorDataWithoutTotal = calculate(
      testingCalculatorDataWithoutTotal,
      operationPressed,
    );

    expect(updatedCalculatorData).toEqual({
      ...testingCalculatorData,
      operation: operationPressed,
    });
    expect(updatedCalculatorDataWithoutTotal).toEqual({
      ...testingCalculatorDataWithoutTotal,
      operation: operationPressed,
    });
  });

  it('should return the correct result when user presses an operation button and there is an existing operation', () => {
    const testingCalculatorData = {
      next: '123',
      total: '123',
      operation: '-',
    };
    const operationPressed = '+';

    const updatedCalculatorData = calculate(testingCalculatorData, operationPressed);

    expect(updatedCalculatorData).toEqual({
      next: null,
      total: '0',
      operation: operationPressed,
    });
  });

  it('should return an empty object when receiving \'=\' as the buttonName with a null operation', () => {
    const testingCalculatorData = {
      next: '123',
      total: '123',
      operation: null,
    };

    const updatedCalculatorData = calculate(testingCalculatorData, '=');

    expect(updatedCalculatorData).toEqual({});
  });

  it('should return the correct response when receiving \'.\' as the buttonName with a valid next', () => {
    const testingCalculatorData = {
      next: '123',
      total: '123',
      operation: null,
    };
    const testingCalculatorDataWithPoint = {
      next: '123.',
      total: '123',
      operation: null,
    };

    const updatedCalculatorData = calculate(testingCalculatorData, '.');
    const updatedCalculatorDataWithPoint = calculate(testingCalculatorDataWithPoint, '.');

    expect(updatedCalculatorData).toEqual({
      ...testingCalculatorData,
      next: `${testingCalculatorData.next}.`,
    });
    expect(updatedCalculatorDataWithPoint).toEqual({
      ...testingCalculatorDataWithPoint,
    });
  });

  it('should return the correct response when receiving \'.\' as the buttonName with a valid total', () => {
    const testingCalculatorData = {
      next: null,
      total: '123',
      operation: null,
    };
    const testingCalculatorDataWithPoint = {
      next: null,
      total: '123.',
      operation: null,
    };

    const updatedCalculatorData = calculate(testingCalculatorData, '.');
    const updatedCalculatorDataWithPoint = calculate(testingCalculatorDataWithPoint, '.');

    expect(updatedCalculatorData).toEqual({
      ...testingCalculatorData,
      next: `${testingCalculatorData.total}.`,
    });
    expect(updatedCalculatorDataWithPoint).toEqual({});
  });

  it('should return the correct response when receiving \'.\' as the buttonName with a valid operation', () => {
    const testingCalculatorData = {
      next: null,
      total: '123',
      operation: '+',
    };

    const updatedCalculatorData = calculate(testingCalculatorData, '.');

    expect(updatedCalculatorData).toEqual({
      ...testingCalculatorData,
      next: '0.',
    });
  });

  it('should return the correct response when receiving \'.\' as the buttonName with a null object', () => {
    const updatedCalculatorData = calculate(DEFAULT_CALCULATOR_DATA, '.');

    expect(updatedCalculatorData).toEqual({
      ...DEFAULT_CALCULATOR_DATA,
      next: '0.',
    });
  });

  it('should return an empty object when receiving \'+/-\' as the buttonName with a null object', () => {
    const updatedCalculatorData = calculate(DEFAULT_CALCULATOR_DATA, '+/-');

    expect(updatedCalculatorData).toEqual({});
  });

  it('should save the operation if the user presses an operation without typing any number', () => {
    const pressedOperation = '+';

    const updatedCalculatorData = calculate(DEFAULT_CALCULATOR_DATA, pressedOperation);

    expect(updatedCalculatorData).toEqual({
      operation: pressedOperation,
    });
  });

  it('should save the operation if the user presses an operation after typing some numbers', () => {
    const testingCalculatorData = {
      next: '123',
      total: null,
      operation: null,
    };
    const pressedOperation = '+';

    const updatedCalculatorData = calculate(testingCalculatorData, pressedOperation);

    expect(updatedCalculatorData).toEqual({
      next: null,
      operation: pressedOperation,
      total: testingCalculatorData.next,
    });
  });

  it('should return the value with opposite sign when receiving \'+/-\' as the buttonName', () => {
    const testingCalculatorData = {
      next: '123',
      total: null,
      operation: null,
    };
    const testingCalculatorDataWithoutNext = {
      total: '123',
      next: null,
      operation: null,
    };

    const updatedCalculatorData = calculate(testingCalculatorData, '+/-');
    const updatedCalculatorDataWithoutNext = calculate(testingCalculatorDataWithoutNext, '+/-');

    expect(updatedCalculatorData).toEqual({
      ...testingCalculatorData,
      next: (-1 * parseFloat(testingCalculatorData.next)).toString(),
    });
    expect(updatedCalculatorDataWithoutNext).toEqual({
      ...testingCalculatorDataWithoutNext,
      total: (-1 * parseFloat(testingCalculatorDataWithoutNext.total)).toString(),
    });
  });
});
