import sum from 'lodash/sum';
import inRange from 'lodash/inRange';

import { TaxBracket } from '@points/types';
import { getTaxBracket } from '@points/utils';

interface GetCalculationResultsParams {
  bracketsByYear: TaxBracket[];
  salary: number;
}

export const getCalculationResults = ({ bracketsByYear, salary }: GetCalculationResultsParams) => {
  // NOTE: ES6 const does not indicate that a value is ‘constant’ or immutable.
  // A const value can definitely change.
  // And in our case we are assigning a new value to this object by Object.assign method
  // Hence declaring it as 'let' and ignoring the ESlints 'prefer-const' rule.
  // eslint-disable-next-line prefer-const
  let amountOfTaxesOwedPerBracket = {};

  for (let index = 0; index < bracketsByYear.length; index++) {
    const { max, min } = bracketsByYear[index];
    // NOTE: API might return 'rate' as a string, so we need to handle that.
    const rate = Number(bracketsByYear[index].rate);

    if (max) {
      if (salary > max) {
        Object.assign(amountOfTaxesOwedPerBracket, { [getTaxBracket(min, max)]: (max - min) * rate });
      } else if (inRange(salary, min, max)) {
        Object.assign(amountOfTaxesOwedPerBracket, { [getTaxBracket(min, max)]: (salary - min) * rate });
      } else {
        break;
      }
    } else {
      Object.assign(amountOfTaxesOwedPerBracket, { [getTaxBracket(min, max)]: (salary - min) * rate });
    }
  }

  const totalOwedTaxAmount = sum(Object.values(amountOfTaxesOwedPerBracket));
  const effectiveTaxRate = totalOwedTaxAmount / salary;

  return {
    amountOfTaxesOwedPerBracket,
    totalOwedTaxAmount,
    effectiveTaxRate,
  };
};
