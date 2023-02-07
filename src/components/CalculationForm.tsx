import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

import { YearSelect } from '@points/components/YearSelect';
import { SalaryInput } from '@points/components/SalaryInput';

import { FormValues } from '@points/types';

import '@points/styles/CalculationForm.css';

interface CalculationFormProps {
  formValues: FormValues;
  handleSubmit: (event: SyntheticEvent) => void;
  isLoading: boolean;
  onResetValues: () => void;
  setFormValues: Dispatch<SetStateAction<FormValues>>;
}

export const CalculationForm = ({
  formValues,
  handleSubmit,
  isLoading,
  onResetValues,
  setFormValues,
}: CalculationFormProps) => (
  <form id="calculation-form" onSubmit={handleSubmit}>
    <SalaryInput onChange={setFormValues} value={formValues.salary} />
    <YearSelect onChange={setFormValues} value={formValues.year} />
    <button type="submit" className="form-button" disabled={isLoading}>
      {isLoading ? 'Calculating...' : 'Calculate'}
    </button>
    <button className="form-button" onClick={onResetValues}>
      Reset
    </button>
  </form>
);
