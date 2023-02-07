import { TaxBracket } from '@points/types';
import { baseURL } from '@points/constants';

export const fetchBracketsByYear = async (year: number): Promise<TaxBracket[] | undefined> => {
  try {
    const response = await fetch(`${baseURL}/tax-calculator/brackets/${year}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const { tax_brackets } = await response.json();
    return tax_brackets;
  } catch (error) {
    console.error('There was a problem while fetching tax brackets by year: ', error);
  }
};

export const fetchBrackets = async (): Promise<TaxBracket[] | undefined> => {
  try {
    const response = await fetch(`${baseURL}/tax-calculator/brackets`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const { tax_brackets } = await response.json();
    return tax_brackets;
  } catch (error) {
    console.error('There was a problem while fetching tax brackets: ', error);
  }
};
