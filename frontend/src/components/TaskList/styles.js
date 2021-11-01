import styled from "styled-components";

export const Container = styled.section`
  background-color: #207567;
  height: 70vh;
  margin: 0 auto;
  max-width: 1440px;
  overflow: auto;
  width: 100vw;
`;

export const TaskContainer = styled.div`
  @media screen and (min-width: 200px) {
    width: 90%;
    min-width: 200px;
  }
  background-color: white;
  border-radius: 8px;
  margin: 25px auto;
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
  /* background-color: white; */
  /* border: 1px solid grey; */
`
export const ParagraphDescription = styled.p`
  font-size: 0.9rem;
  background-color: white;
`

export const Button = styled.button`
  background-color: ${props => props.red ? 'red' : '#207567'};
  border-radius: 4px;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  height: 35px;
  margin: 10px 0 10px 10px;
  transition: 0.5s;
  width: 150px;

  :hover {
    background-color: white;
    border: 1px solid ${props => props.red ? 'red' : 'green'};
    border-radius: 15px;
    color:  ${props => props.red ? 'red' : 'green'};
    cursor: pointer;
  }
  `;

  export const ParagraphStatus = styled.p`
    background-color: #8DC3A7;
    border: 2px solid black;
    border-radius: 8px;
    color: white;

  `;

