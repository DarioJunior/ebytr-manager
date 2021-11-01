import { useDispatch } from 'react-redux';

export function loginAction(user) {
  const userDispatcher = useDispatch();
  userDispatcher({ type: 'LOGIN', user })
}