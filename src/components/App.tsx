import { useCallback, useState } from 'react';

import { CalculationForm } from '@points/components/CalculationForm';

import { numberFormatter } from '@points/utils';
import { defaultFormValues, percentOptions, preciseCurrencyOptions } from '@points/constants';
import { AmountOfTaxesOwedPerBracket, FormValues } from '@points/types';

export const App = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [effectiveTaxRate, setEffectiveTaxRate] = useState(0);
  const [totalOwedTaxAmount, setTotalOwedTaxAmount] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>(defaultFormValues);
  const [amountOfTaxesOwedPerBracket, setAmountOfTaxesOwedPerBracket] = useState<AmountOfTaxesOwedPerBracket>({});

  const handleSubmit = () => {
    console.log('Submitting form...');
  };

  const handleResetValues = useCallback(() => {
    setEffectiveTaxRate(0);
    setTotalOwedTaxAmount(0);
    setFormValues(defaultFormValues);
  }, []);

  return (
    <div className="app">
      <h1>Marginal Tax Calculator</h1>
      <CalculationForm
        formValues={formValues}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        onResetValues={handleResetValues}
        setFormValues={setFormValues}
      />
      {error && <strong style={{ color: 'red' }}>{error}</strong>}
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
    </div>
  );
};
