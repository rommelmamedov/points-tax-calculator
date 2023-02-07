import { preciseCurrencyOptions } from '@points/constants';
import { numberFormatter, getTaxBracket } from '@points/utils';

describe('numberFormatter', () => {
  it('should return a formatted number with default options', () => {
    const amount = 123456.789;
    const expectedResult = '$123,457';

    const result = numberFormatter(amount);

    expect(result).toBe(expectedResult);
  });

  it('should return a formatted number with precise currency options', () => {
    const amount = 123456.789;
    const expectedResult = '$123,456.79';

    const result = numberFormatter(amount, preciseCurrencyOptions);

    expect(result).toBe(expectedResult);
  });
});

describe('getTaxBracket', () => {
  it('should return a formatted string with a range of values', () => {
    const min = 10000;
    const max = 20000;
    const expectedResult = '$10,000 — $20,000';

    const result = getTaxBracket(min, max);

    expect(result).toBe(expectedResult);
  });

  it('should return a formatted string without max', () => {
    const min = 10000;
    const expectedResult = '$10,000 or more';

    const result = getTaxBracket(min, undefined);

    expect(result).toBe(expectedResult);
  });
});
