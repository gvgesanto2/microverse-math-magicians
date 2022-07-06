import operate from '../operate';

describe('operate() function', () => {
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
});
