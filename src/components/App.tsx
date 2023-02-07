import isEmpty from 'lodash/isEmpty';
import { useState, SyntheticEvent, useCallback } from 'react';

import { CalculationForm } from '@points/components/CalculationForm';
import { TaxBracketsTable } from '@points/components/TaxBracketsTable';
import { CalculationResults } from '@points/components/CalculationResults';

import { fetchBracketsByYear } from '@points/api';
import { defaultFormValues } from '@points/constants';
import { getCalculationResults } from '@points/features';
import { FormValues, AmountOfTaxesOwedPerBracket } from '@points/types';

export const App = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [effectiveTaxRate, setEffectiveTaxRate] = useState(0);
  const [totalOwedTaxAmount, setTotalOwedTaxAmount] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>(defaultFormValues);
  const [amountOfTaxesOwedPerBracket, setAmountOfTaxesOwedPerBracket] = useState<AmountOfTaxesOwedPerBracket>({});

  const handleSubmit = async (event: SyntheticEvent) => {
    // NOTE: Prevents the page from reloading.
    event.preventDefault();
    const { salary, year } = formValues;
    setIsLoading(true);

    if (salary) {
      const bracketsByYear = await fetchBracketsByYear(year);

      if (bracketsByYear) {
        const { amountOfTaxesOwedPerBracket, totalOwedTaxAmount, effectiveTaxRate } = getCalculationResults({
          bracketsByYear,
          salary,
        });

        setError('');
        setEffectiveTaxRate(effectiveTaxRate);
        setTotalOwedTaxAmount(totalOwedTaxAmount);
        setAmountOfTaxesOwedPerBracket(amountOfTaxesOwedPerBracket);
      } else {
        setError('Error fetching tax brackets data. Please try again later.');
        setEffectiveTaxRate(0);
        setTotalOwedTaxAmount(0);
        setAmountOfTaxesOwedPerBracket({});
      }
    }
    setIsLoading(false);
  };

  const handleResetValues = useCallback(() => {
    setEffectiveTaxRate(0);
    setTotalOwedTaxAmount(0);
    setAmountOfTaxesOwedPerBracket({});
    setFormValues(defaultFormValues);
  }, []);

  const hasCalculationResults = !isEmpty(amountOfTaxesOwedPerBracket);

  return (
    <div className="app">
      <h1>Marginal Tax Calculator</h1>
      <CalculationForm
        formValues={formValues}
        handleSubmit={handleSubmit}
        hasCalculationResults={hasCalculationResults}
        isLoading={isLoading}
        onResetValues={handleResetValues}
        setFormValues={setFormValues}
      />
      {error && <strong style={{ color: 'red' }}>{error}</strong>}
      {hasCalculationResults && (
        <CalculationResults
          amountOfTaxesOwedPerBracket={amountOfTaxesOwedPerBracket}
          effectiveTaxRate={effectiveTaxRate}
          totalOwedTaxAmount={totalOwedTaxAmount}
        />
      )}
      <TaxBracketsTable />
    </div>
  );
};
