import { React, useState } from 'react';
import { TaskModal } from '../TaskModal';

import {
  Button,
  Container,
  ParagraphDescription,
  ParagraphName,
  ParagraphStatus,
  TaskContainer,
} from './styles';

import TASKS from '../../api/tasks.mock';

export default function TaskList() {
  const [modalShow, setModalShow] = useState(false);
  const [currentTask, setCurrentTask] = useState('');

  return (
    <Container>
      {
        TASKS.map((task, index) => (
          <TaskContainer key={ index }>
            <ParagraphName>
              {task.name}
              :
            </ParagraphName>
            <ParagraphDescription>{task.description}</ParagraphDescription>
            <ParagraphStatus>{task.status}</ParagraphStatus>
            <Button
              type="button"
              onClick={ () => { setCurrentTask(task); setModalShow(true); } }
            >
              Edit
            </Button>
            <Button
              type="button"
              red
            >
              Delete
            </Button>
          </TaskContainer>
        ))
      }
      <TaskModal
        task={ currentTask }
        show={ modalShow }
        onHide={ () => setModalShow(false) }
      />
    </Container>
  );
}
