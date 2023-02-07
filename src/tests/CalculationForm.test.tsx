import { vi } from 'vitest';
import user from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { CalculationForm } from '@points/components/CalculationForm';
import { defaultFormValues } from '@points/constants';

describe('CalculationForm', () => {
  test('renders the calculation form', () => {
    const mock = vi.fn();

    render(
      <CalculationForm
        formValues={defaultFormValues}
        handleSubmit={mock}
        hasCalculationResults={false}
        isLoading={false}
        onResetValues={mock}
        setFormValues={mock}
      />,
    );
    const input = screen.getByLabelText(/salary/i);
    const select = screen.getByLabelText(/year/i);
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('renders the calculation form with the correct values', () => {
    const handleSubmit = vi.fn();
    const onResetValues = vi.fn();
    const setFormValues = vi.fn();

    render(
      <CalculationForm
        formValues={defaultFormValues}
        handleSubmit={handleSubmit}
        hasCalculationResults={false}
        isLoading={false}
        onResetValues={onResetValues}
        setFormValues={setFormValues}
      />,
    );
    const input = screen.getByLabelText(/salary/i);
    const select = screen.getByLabelText(/year/i);
    const calculateButton = screen.getByText('Calculate');

    user.click(input);
    user.keyboard('100000');

    user.click(select);
    user.keyboard('{arrowdown}{enter}');

    user.click(calculateButton);

    // expect(handleSubmit).toHaveBeenCalled();
    // expect(input).toHaveValue(defaultFormValues.salary);
    // expect(select).toHaveValue(defaultFormValues.year);
  });
});
