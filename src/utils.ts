import { defaultCurrencyOptions } from '@points/constants';

export const numberFormatter = (amount: number, options = defaultCurrencyOptions) =>
  new Intl.NumberFormat('en', options).format(amount);
