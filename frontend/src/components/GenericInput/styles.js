import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Input = styled.input`
  @media screen and (min-width: 200px) {
    min-width: 200px;
    width: 85vw;
    font-size: 1rem;
  }

  @media screen and (min-width: 575px) {
    width: 465px;

  }
  
  @media screen and (min-width: 992px) {
    width: 765px;
  } 
`;
