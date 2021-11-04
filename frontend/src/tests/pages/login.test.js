import { React } from 'react';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../App';

describe('1) LOGIN TESTs:', () => {
  it('1.1) Verify if input email exists', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const emailInput = getByTestId('input-email');
    const passwordInput = getByTestId('password-email');


    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // expect(history.length).toBe(2);
    // expect(history.location.pathname).toBe('/about');
  });
});
