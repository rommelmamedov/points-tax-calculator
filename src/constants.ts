import { FormValues, NumberFormatOptions } from '@points/types';

// NOTE: Apple took over port 5000 in the latest macOS
// Apple decided to utilize port 5000 with something called AirPlay Receiver.
// For more info: https://daily-dev-tips.com/posts/thank-you-apple-for-hijacking-port-5000
export const baseURL = 'http://localhost:5000';
export const taxYearOptions = [2019, 2020, 2021];
export const defaultYear = taxYearOptions[2];

export const defaultCurrencyOptions: NumberFormatOptions = {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

export const preciseCurrencyOptions: NumberFormatOptions = {
  ...defaultCurrencyOptions,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export const percentOptions: NumberFormatOptions = {
  style: 'percent',
  maximumFractionDigits: 2,
};

export const defaultFormValues: FormValues = {
  salary: undefined,
  year: defaultYear,
};
