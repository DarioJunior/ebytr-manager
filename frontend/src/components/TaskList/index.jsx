import { useEffect, useState } from 'react';
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

export function TaskList() {
  const [modalShow, setModalShow] = useState(false);
  const [currentTask, setCurrentTask] = useState('');
  
  return (
    <>
      <Container>
        {
          TASKS.map((task, index) => {
            return (
              <TaskContainer>
                <ParagraphName key={index}>{task.name}:</ParagraphName>
                <ParagraphDescription key={index}>{task.description}</ParagraphDescription>
                <ParagraphStatus key={index}>{task.status}</ParagraphStatus>
                <Button
                  key={index}
                  type="button"
                  onClick={() => { setCurrentTask(task); setModalShow(true); }}
                >
                  Editar
                </Button>
                <Button
                  key={index}
                  type="button"
                  red
                >
                  Excluir
                </Button>

              </TaskContainer>
            )
          })
        }
        <TaskModal
          task={currentTask}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </>
  )
}