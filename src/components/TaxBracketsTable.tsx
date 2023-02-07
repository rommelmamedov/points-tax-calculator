import { useEffect, useState } from 'react';

import { TaxBracket } from '@points/types';
import { fetchBrackets } from '@points/api';
import { defaultYear, percentOptions } from '@points/constants';
import { getTaxBracket, getTaxPayable, numberFormatter } from '@points/utils';

import '@points/styles/TaxBracketsTable.css';

export const TaxBracketsTable = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TaxBracket[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchBrackets();
      if (data) {
        setData(data);
      } else {
        setError('Error fetching tax brackets data. Please try again later.');
      }
      setIsLoading(false);
    })();
  }, []);

  if (error) {
    return <strong style={{ color: 'red' }}>{error}</strong>;
  }

  return (
    <>
      {isLoading ? (
        <strong>Loading tax bracket table for {defaultYear}...</strong>
      ) : (
        <strong>Tax bracket for {defaultYear}:</strong>
      )}
      <table className="tax-brackets-table">
        <thead>
          <tr>
            <th>Tax bracket</th>
            <th>Marginal Tax Rate</th>
            <th>Amount taxable</th>
            <th>Tax payable</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ min, max, rate }, index) => (
            <tr key={index}>
              <td>{getTaxBracket(min, max)}</td>
              <td>{numberFormatter(Number(rate), percentOptions)}</td>
              <td>{max ? numberFormatter(max - min) : '~'}</td>
              <td>{getTaxPayable({ min, max, rate })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
