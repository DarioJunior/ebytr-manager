import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  max-width: 1440px;
  height: 15vh;
  
  background-color: #358873;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  @media screen and (min-width: 200px) {
    font-size: 2rem;
    width: 90vw;
    height: 80px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  color: #207567;
  background-color: #B4D6C1;
  border-radius: 5px;
  font-weight: 800;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
