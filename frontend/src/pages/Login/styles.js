import styled from 'styled-components';

export const Container = styled.form`
  background-color: #207567;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 1440px;
  width: 100vw;
`;

export const Input = styled.input`
  @media screen and (min-width: 200px) {
    font-size: 1rem;
    width: 70%;
    height: 40px;
  }

  max-width: 300px;
  
  border-radius: 5px;
  margin-top: 20px;
  height: 50px;
  padding: 10px;
  width: 300px;

  transition: 0.2s;

  :focus {
    box-shadow: 0 0 10px 5px #6BAF92;
    outline: none;
  }
`;

export const Button = styled.button`
  @media screen and (min-width: 200px) {
      font-size: 1rem;
      width: 70%;
      height: 40px;
    }

    @media screen and (min-width: 200px) {
      font-size: 1rem;
      width: 70%;
      height: 40px;
    }

  background-color: #8DC3A7;
  border-radius: 1px;
  color: #207567;
  font-size: 1.2rem;
  font-weight: 800;
  height: 40px;
  margin-top:30px;
  max-width: 300px;

  transition: 0.5s;

  :hover {
    border: 5px solid #8DC3A7;
    border-radius: 10px;
    background-color: #207567;
    color: #8DC3A7;
    outline: none;
  }
`;
