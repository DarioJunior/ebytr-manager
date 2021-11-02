import axios from 'axios';

const BASE_URL = 'http://localhost:3333/login';

export async function validateLogin(email, password) {
  const { data } = await axios.post(BASE_URL, {
    email,
    password,
  })

  if (data) {
    return data;
  } 
  return false;
}