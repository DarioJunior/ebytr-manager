import styled from 'styled-components';

export const Container = styled.section`
  background-color: #207567;
  box-sizing: border-box;
  
  height: 75vh;
  margin: 0 auto;
  max-width: 1440px;
  padding: 10px 10px;
  width: 100%;
  overflow: auto;

  display: inline;
  text-align: center;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
`;

export const TaskContainer = styled.div`
  @media screen and (min-width: 200px) {
    width: 90%;
    min-width: 200px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto 15px auto;
  padding: 10px 20px;
  text-align: center;
  width: 45%;

  transition: 0.3s;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const ParagraphName = styled.h3`
  color: rgb(100, 100, 100);
`;

export const ParagraphDescription = styled.p`
  font-size: 0.9rem;
  background-color: white;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.red ? 'red' : '#207567')};
  border-radius: 4px;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  height: 35px;
  margin: 10px 0 10px 0px;
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

export const ParagraphStatus = styled.p`
  background-color: ${({ status }) => (
    // eslint-disable-next-line no-nested-ternary
    status === 'Pending' ? 'red'
      : status === 'In Progress'
        ? '#9B870C'
        : 'green')
};
  border: 2px solid black;
  border-radius: 8px;
  color: white;
  width: 120px;
`;

export const InputSelect = styled.select`
background-color: white;
border: 2px solid black;
border-radius: 8px;
/* color: white; */
margin: 0 auto;
height: 4
0px;
width: 120px;
`;
