export type Min = number;
export type Max = number | undefined;
export type Rate = number;

export interface TaxBracket {
  min: number;
  max?: number;
  rate: number | string;
}

// NOTE: This is a copy of the NumberFormatOptions interface from the official implementation.
// For more information, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
export interface NumberFormatOptions {
  currency?: string;
  currencyDisplay?: 'symbol' | 'code' | 'name';
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  minimumIntegerDigits?: number;
  style?: 'decimal' | 'currency' | 'percent' | 'scientific' | 'accounting';
  useGrouping?: boolean;
}

export interface FormValues {
  salary: number | undefined;
  year: number;
}

export interface AmountOfTaxesOwedPerBracket {
  [bracket: string]: number;
}
