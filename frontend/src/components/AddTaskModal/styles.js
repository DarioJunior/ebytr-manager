import styled from "styled-components";

export const ContainerBody = styled.form`
  @media screen and (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 400px;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Input = styled.input`
  @media screen and (max-width: 360px) {
    background-color: #207567;
    color: white;
    width: 85vw;

    ::placeholder {
      color: white;
    }
    padding: 10px;

  }

  border: 2px solid grey;
  border-radius: 5px; 
  height:35px;
`;

export const TextArea = styled.textarea`
  @media screen and (max-width: 360px) {
    width: 85vw;
  }
  background-color: #207567;
  color: white;
  border: 2px solid grey;
  border-radius: 5px; 
  height: 130px;
  padding: 10px;
  width: 230px;
  ::placeholder {
    color: white;
  }
`;

export const Select = styled.select`
  @media screen and (max-width: 360px) {
    color: white;
    width: 85vw;
  }
  background-color: #207567;
  border: 2px solid grey;
  border-radius: 5px; 
  height: 35px;
  width: 100px;
`;

export const Button = styled.button`
  background-color: ${props => props.red ? 'red' : '#207567' } ;
  border-radius: 5px;
  color: #DFEAE2;
  font-weight: 600;
  height: 40px;
  margin: 0 auto;
  width: 170px;
`;