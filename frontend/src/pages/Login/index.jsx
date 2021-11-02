import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginAction } from '../../actions/user.actions';
import { validateLogin } from '../../services/login.services';
import { Container, Input, Button } from './styles';

export function Login() {
  const [ loginButtonDisabled, setLoginButtonDisabled] = useState(true);

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
    const userExists = await validateLogin(emailInput, passwordInput);

    if(userExists) {
      dispatch(loginAction(userExists));
      return history.push('/home');
    };
    alert('Usuário não existe, tente novamente');
    return history.push('/login');
  }

  return (
    <Container onSubmit={ (event) => handleSubmitForm(event) }>
      <Input
        name="email"
        placeholder="email@example.com"
        type="text"
        onChange={({target}) => setEmailInput(target.value)}
        valor={ emailInput }
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={({target}) => setPasswordInput(target.value)}
        valor={ passwordInput }
      />
      <Button
        type="submit"
        disabled={ loginButtonDisabled }
      >
        Login
      </Button>
    </Container>
  );
}

// import { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
// import { validateLogin } from '../../services/login.services';
// import { Container, Input, Button } from './styles';

// export function Login() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLogged, setIsLogged] = useState(false);

//   const [emailInput, setEmailInput] = useState('');
//   const [passwordInput, setPasswordInput] = useState('');
//   const history = useHistory();

//   useEffect(async () => {
//     if (isLoading) {
//       const fetchLoginInfos = async (email, password) => {
//         const result = await validateLogin(email, password)
//         return result 
//         ? (setIsLogged(true), history.push('/home')) 
//         : (setIsLogged(false), history.push('/login'));
//       }
//       fetchLoginInfos(emailInput, passwordInput);
//     }
//   }, [isLoading])

//   function handleSubmitForm() {
//     setIsLoading(true);
//   }

//   return (
//     <Container>
//       <Input
//         name="email"
//         placeholder="email@example.com"
//         type="text"
//         onChange={({target}) => setEmailInput(target.value)}
//         valor={ emailInput }
//       />
//       <Input
//         name="password"
//         placeholder="password"
//         type="password"
//         onChange={({target}) => setPasswordInput(target.value)}
//         valor={ passwordInput }
//       />
//       <Button
//         type="button"
//         onClick={ () => handleSubmitForm()}
//       >
//         Login
//       </Button>
//     </Container>
//   );
// }