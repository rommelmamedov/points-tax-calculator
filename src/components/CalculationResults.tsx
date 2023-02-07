import { numberFormatter } from '@points/utils';
import { AmountOfTaxesOwedPerBracket } from '@points/types';
import { percentOptions, preciseCurrencyOptions } from '@points/constants';

import '@points/styles/CalculationResults.css';

interface CalculationResultsProps {
  amountOfTaxesOwedPerBracket: AmountOfTaxesOwedPerBracket;
  effectiveTaxRate: number;
  totalOwedTaxAmount: number;
}

export const CalculationResults = ({
  effectiveTaxRate,
  totalOwedTaxAmount,
  amountOfTaxesOwedPerBracket,
}: CalculationResultsProps) => (
  <div className="calculation-results">
    <strong>Amount of taxes owed per bracket:</strong>
    <ul className="amount-of-taxes-owed-per-bracket">
      {Object.entries(amountOfTaxesOwedPerBracket).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong>
          <em className="value">{numberFormatter(value, preciseCurrencyOptions)}</em>
        </li>
      ))}
    </ul>
    <div>
      <strong>Total owed tax amount:</strong>
      <em className="value">{numberFormatter(totalOwedTaxAmount, preciseCurrencyOptions)}</em>
    </div>
    <div>
      <strong>Effective tax rate:</strong>
      <em className="value">{numberFormatter(effectiveTaxRate, percentOptions)}</em>
    </div>
  </div>
);
