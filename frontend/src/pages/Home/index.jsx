import { React } from 'react';
import { Header } from '../../components/Header';
import AddTask from '../../components/AddTask';
import { TaskList } from '../../components/TaskList';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTask />
      <TaskList />
    </Container>
  );
}
