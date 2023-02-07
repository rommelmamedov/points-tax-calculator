import { useCallback, useState } from 'react';

import { CalculationForm } from '@points/components/CalculationForm';

import { FormValues } from '@points/types';
import { defaultFormValues } from '@points/constants';

export const App = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [effectiveTaxRate, setEffectiveTaxRate] = useState(0);
  const [totalOwedTaxAmount, setTotalOwedTaxAmount] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>(defaultFormValues);

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
    </div>
  );
};
