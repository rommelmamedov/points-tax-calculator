import { Min, Max, TaxBracket } from '@points/types';
import { defaultCurrencyOptions, preciseCurrencyOptions } from '@points/constants';

export const numberFormatter = (amount: number, options = defaultCurrencyOptions) =>
  new Intl.NumberFormat('en', options).format(amount);

export const getTaxBracket = (min: Min, max: Max) => {
  if (max) {
    return `${numberFormatter(min)} — ${numberFormatter(max)}`;
  }

  return `${numberFormatter(min)} or more`;
};

export const getTaxPayable = ({ min, max, rate }: TaxBracket) => {
  if (max) {
    return numberFormatter((max - min) * Number(rate), preciseCurrencyOptions);
  }

  return '~';
};
