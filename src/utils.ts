import { Min, Max } from '@points/types';
import { defaultCurrencyOptions } from '@points/constants';

export const numberFormatter = (amount: number, options = defaultCurrencyOptions) =>
  new Intl.NumberFormat('en', options).format(amount);

export const getTaxBracket = (min: Min, max: Max) => {
  if (max) {
    return `${numberFormatter(min)} — ${numberFormatter(max)}`;
  }

  return `${numberFormatter(min)} or more`;
};
