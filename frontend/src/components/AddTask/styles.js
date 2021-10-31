import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  max-width: 1440px;
  height: 100px;
  
  background-color: #358873;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  @media screen and (max-width: 360px) {

    font-size: 2rem;
    width: 90vw;
    height: 80px;
  }
  color: #207567;
  background-color: #B4D6C1;
  border-radius: 5px;
  font-weight: 800;
  height: 30px;
  width: 170px;;
`;