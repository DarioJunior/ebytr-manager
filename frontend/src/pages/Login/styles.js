import styled from "styled-components";

export const Container = styled.form`
  align-items: center;
  background-color: #207567;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-width: 1440px;
  width: 100vw;
`;

export const Input = styled.input`
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
  background-color: #8DC3A7;
  border-radius: 1px;
  color: #207567;
  font-size: 1.2rem;
  font-weight: 800;
  height: 40px;
  margin-top:30px;
  width: 200px;

  transition: 0.5s;

  :hover {
    border: 5px solid #8DC3A7;
    border-radius: 10px;
    background-color: #207567;
    color: #8DC3A7;
    outline: none;
  }
`;