import axios from 'axios';

const BASE_URL = 'http://localhost:3333/login';

export default async function validateLogin(email, password) {
  const { data } = await axios.post(BASE_URL, {
    email,
    password,
  });

  localStorage.setItem('token', JSON.stringify(data.token));
  if (data.result) {
    return data.result;
  }
  return false;
}
