import operate from '../operate';

const NUM_1 = 7;
const NUM_2 = 10;

describe('operate() function', () => {
  it('should be able to sum two numbers', () => {
    const expectedResult = NUM_1 + NUM_2;
    const result = Number(operate(NUM_1, NUM_2, '+'));
    expect(result).toBe(expectedResult);
  });

  it('should be able to subtract two numbers', () => {
    const expectedResult = NUM_1 - NUM_2;
    const result = Number(operate(NUM_1, NUM_2, '-'));
    expect(result).toBe(expectedResult);
  });

  it('should be able to multiply two numbers', () => {
    const expectedResult = NUM_1 * NUM_2;
    const result = Number(operate(NUM_1, NUM_2, 'x'));
    expect(result).toBe(expectedResult);
  });

  it('should be able to divide two numbers', () => {
    const expectedResult = NUM_1 / NUM_2;
    const result = Number(operate(NUM_1, NUM_2, '÷'));
    expect(result).toBe(expectedResult);
  });

  it('should be able to calculate the modulo of one number by another', () => {
    const expectedResult = NUM_1 % NUM_2;
    const result = Number(operate(NUM_1, NUM_2, '%'));
    expect(result).toBe(expectedResult);
  });

  it('should throw an error if given an invalid operation', () => {
    const invalidOperation = 'invalid';
    expect(() => {
      operate(1, 2, invalidOperation);
    }).toThrow(Error);
  });

  it('should NOT be able to divide a number by 0', () => {
    const divideByZeroErrorMessage = 'Can\'t divide by 0.';
    const result = operate(80, 0, '÷');
    expect(result).toBe(divideByZeroErrorMessage);
  });

  it('should NOT be able to calculate modulo 0', () => {
    const moduloZeroErrorMessage = 'Can\'t find modulo as can\'t divide by 0.';
    const result = operate(80, 0, '%');
    expect(result).toBe(moduloZeroErrorMessage);
  });
});
