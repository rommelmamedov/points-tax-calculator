import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';

import { FormValues } from '@points/types';

interface SalaryInputProps {
  onChange: Dispatch<SetStateAction<FormValues>>;
  value: number | undefined;
}

export const SalaryInput = ({ onChange, value }: SalaryInputProps) => {
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(formValues => ({ ...formValues, salary: event.target.valueAsNumber }));
  }, []);

  return (
    <div className="input-wrapper">
      <label htmlFor="salary">Yearly salary</label>
      <input
        className="salary-input"
        type="number"
        id="salary"
        min={0}
        name="salary"
        placeholder="Please enter yearly salary"
        // NOTE: This is a workaround for showing placeholder if value is undefined.
        // Otherwise React will treat this input component as non-controlled.
        value={value ? value : ''}
        onChange={handleChange}
        required
      />
    </div>
  );
};
