import { Container, Logo, LogoContainer } from './styles';
import { useSelector } from 'react-redux'
export function Header() {
  const userInfos = useSelector(state => state.UserReducer.user);
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
  )
}