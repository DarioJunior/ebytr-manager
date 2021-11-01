import { useState } from 'react';
import { Container, Input, Button } from './styles';

export function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <Container>
      <Input
        placeholder="email@example.com"
        type="text"
        onChange={({target}) => setEmailInput(target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        onChange={({target}) => setEmailInput(target.value)}
      />
      <Button type="button">
        Login
      </Button>
    </Container>
  );
}