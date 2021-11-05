import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import loginAction from '../../actions/user.actions';

import validateLogin from '../../api/login.services';

import { Container, Input, Button } from './styles';

export default function Login() {
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const minLength = 6;
    setLoginButtonDisabled(true);
    if (regex.test(emailInput) && passwordInput.length > minLength) {
      setLoginButtonDisabled(false);
    }
  }, [emailInput, passwordInput]);

  async function handleSubmitForm(event) {
    event.preventDefault();
    console.log('click');
    const userExistsInfos = await validateLogin(emailInput, passwordInput);

    if (userExistsInfos) {
      dispatch(loginAction(userExistsInfos));
      return history.push('/home');
    }

    alert('Unknown user, try again');
    return history.push('/');
  }

  return (
    <Container onSubmit={ (event) => handleSubmitForm(event) }>
      <Input
        data-testid="input-email"
        name="email"
        placeholder="email@example.com"
        type="text"
        onChange={ ({ target }) => setEmailInput(target.value) }
        valor={ emailInput }
      />
      <Input
        data-testid="input-password"
        name="password"
        placeholder="password"
        type="password"
        onChange={ ({ target }) => setPasswordInput(target.value) }
        valor={ passwordInput }
      />
      <Button
        data-testid="login-button"
        type="submit"
        disabled={ loginButtonDisabled }
      >
        Login
      </Button>
    </Container>
  );
}
