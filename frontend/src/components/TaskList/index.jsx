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
              <TaskContainer key={ index }>
                <ParagraphName key={ index +1}>{task.name}:</ParagraphName>
                <ParagraphDescription key={ index + 2 }>{task.description}</ParagraphDescription>
                <ParagraphStatus key={ index + 3 }>{task.status}</ParagraphStatus>
                <Button
                  key={ index + 4}
                  type="button"
                  onClick={() => { setCurrentTask(task); setModalShow(true); }}
                >
                  Edit
                </Button>
                <Button
                  key={ index + 5}
                  type="button"
                  red
                >
                  Delete
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