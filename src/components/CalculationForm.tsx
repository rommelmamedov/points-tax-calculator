import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

import { FormValues } from '@points/types';
import { taxYearOptions } from '@points/constants';

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
    <input
      className="salary-input"
      type="number"
      id="salary"
      min={0}
      name="salary"
      placeholder="Please enter yearly salary"
      // NOTE: This is a workaround for showing placeholder if value is undefined.
      // Otherwise React will treat this input component as non-controlled.
      value={formValues.salary ? formValues.salary : ''}
      onChange={() => console.log('changed')}
      required
    />
    <select className="tax-year-select" value={formValues.year} onChange={() => console.log('changed')} required>
      {taxYearOptions.map(year => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
    <button type="submit" className="form-button" disabled={isLoading}>
      {isLoading ? 'Calculating...' : 'Calculate'}
    </button>
    <button className="form-button" onClick={onResetValues}>
      Reset
    </button>
  </form>
);
