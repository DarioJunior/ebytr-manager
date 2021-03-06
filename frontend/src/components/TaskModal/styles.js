import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => (props.red ? 'red' : 'green')};
  border-radius: 4px;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  height: 35px;
  margin: 0 auto;
  transition: 0.5s;
  width: 150px;

  :hover {
    background-color: white;
    border: 1px solid ${(props) => (props.red ? 'red' : 'green')};
    border-radius: 15px;
    color:  ${(props) => (props.red ? 'red' : 'green')};
    cursor: pointer;
  }
`;

export const ModalBodyContainer = styled.div`
  display:flex;
  flex-direction: column;
`;
