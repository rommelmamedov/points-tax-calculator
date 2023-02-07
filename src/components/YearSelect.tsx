import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';

import { FormValues } from '@points/types';
import { taxYearOptions } from '@points/constants';

interface YearSelectProps {
  onChange: Dispatch<SetStateAction<FormValues>>;
  value: number;
}

export const YearSelect = ({ value, onChange }: YearSelectProps) => {
  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange(formValues => ({ ...formValues, year: Number(event.target.value) }));
  }, []);

  return (
    <div className="input-wrapper">
      <label htmlFor="salary">Select year</label>
      <select className="tax-year-select" value={value} onChange={handleChange} required>
        {taxYearOptions.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};
