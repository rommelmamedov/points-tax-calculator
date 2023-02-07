import { TaxBracket } from '@points/types';
import { getCalculationResults } from '@points/features';

describe('getCalculationResults', () => {
  it('should return an object with amountOfTaxesOwedPerBracket, totalOwedTaxAmount and effectiveTaxRate', () => {
    const salary = 80000;
    const bracketsByYear: TaxBracket[] = [
      {
        min: 0,
        max: 5000,
        rate: 0.1,
      },
      {
        min: 5000,
        max: 10000,
        rate: 0.15,
      },
      {
        min: 10000,
        rate: 0.2,
      },
    ];

    const expectedResult = {
      amountOfTaxesOwedPerBracket: {
        '$0 — $5,000': 500,
        '$5,000 — $10,000': 750,
        '$10,000 or more': 14000,
      },
      totalOwedTaxAmount: 15250,
      effectiveTaxRate: 0.190625,
    };

    const result = getCalculationResults({ salary, bracketsByYear });

    expect(result).toEqual(expectedResult);
  });
});
