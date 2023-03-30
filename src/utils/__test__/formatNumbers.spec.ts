import formatNumbers from '../formatNumbers';

describe('formatNumbers', () => {
  it('formats numbers as currency with the correct number of digits', () => {
    const num1 = 1234.56789;
    const num2 = 987654.321;
    const num3 = 999;
    const digits1 = 2;
    const digits2 = 0;
    const digits3 = 3;

    const result1 = formatNumbers(num1, digits1);
    const result2 = formatNumbers(num2, digits2);
    const result3 = formatNumbers(num3, digits3);

    expect(result1).toBe('1234,57');
    expect(result2).toBe('987.654');
    expect(result3).toBe('999,000');
  });
});
