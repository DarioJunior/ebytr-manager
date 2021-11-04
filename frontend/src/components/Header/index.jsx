import { React } from 'react';
import { Container, Logo, LogoContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo data-testid="header-logo">
          Ebytr Mngr.
        </Logo>
      </LogoContainer>
    </Container>
  );
}
