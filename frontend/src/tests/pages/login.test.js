import { React } from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../../App';

describe('1) LOGIN TESTs:', () => {
  it('1.1) Verify if input email exists', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const emailInput = getByTestId('input-email');

    expect(emailInput).toBeInTheDocument();
  });

  it('1.2) Verify if input password exists', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const passwordInput = getByTestId('input-password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('1.3) Verify if login button exists', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const loginButton = getByTestId('login-button');
    expect(loginButton).toBeInTheDocument();
  });

  it('1.4) Verify if login button is disabled', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const loginButton = getByTestId('login-button');
    expect(loginButton).toBeDisabled();
  });

  it('1.4) Verify if login button is enable if infos placed', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const emailInput = getByTestId('input-email');
    const passwordInput = getByTestId('input-password');
    const loginButton = getByTestId('login-button');
    userEvent.type(emailInput, 'admin@example.com');
    expect(emailInput.value).toBe('admin@example.com');
    userEvent.type(passwordInput, 'admin12345');
    expect(passwordInput.value).toBe('admin12345');
    expect(loginButton).not.toBeDisabled();
  });
});
