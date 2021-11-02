import { React } from 'react';
import { useSelector } from 'react-redux';
import { Container, Logo, LogoContainer } from './styles';

export default function Header() {
  const userInfos = useSelector((state) => state.UserReducer.user);
  return (
    <Container>
      <LogoContainer>
        <Logo>
          Ebytr Mngr.
        </Logo>
        <p>
          { userInfos.name }
        </p>
      </LogoContainer>
    </Container>
  );
}
