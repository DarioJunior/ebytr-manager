import styled from "styled-components";
// #DFEAE2 #B4D6C1 #8DC3A7 #6BAF92 #4E9C81 #358873 #207567
export const Container = styled.header`
  @media screen and (max-width: 360px) {
    background-color: #207567;
  }

  background-color: #207567;
  height: 10vh;
  margin: 0 auto;
  max-width: 1440px;
  min-height: 100px;
  padding: 20px 15px;
  width: 100vw;
`;

export const LogoContainer = styled.div`
  @media screen and (max-width: 360px) {
    background-color: #8DC3A7;
    margin: 0 auto;
  }
  
  background-color: #8DC3A7;
  border-radius: 50px;
  height: 50px;
  text-align: center;
  width: 200px;
`
export const Logo = styled.p`
  color: #4E9C81;
  font-size: 2rem;
  font-weight: 800;
`;