import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskModal from '../TaskModal';

import { getAllTasks } from '../../api/task.services';
import addTasksList from '../../actions/tasks.actions';

import {
  Button,
  Container,
  ParagraphDescription,
  ParagraphName,
  ParagraphStatus,
  TaskContainer,
} from './styles';

export default function TaskList() {
  const IS_LOADING_STORE = useSelector((state) => state.TasksReducer.isLoading);
  const TASK_LIST_STORE = useSelector((state) => state.TasksReducer.tasks);

  const [isLoading, setIsLoading] = useState(IS_LOADING_STORE);
  const [taskList, setTaskList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [currentTask, setCurrentTask] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getAllTasks();
      if (data.length !== 0) {
        dispatch(addTasksList(data));
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    setTaskList(TASK_LIST_STORE);
  }, [isLoading, TASK_LIST_STORE]);

  return (
    <Container>
      {
        isLoading ? <p>CARREGANDO</p>
          : taskList.map((task, index) => (
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
      {
        currentTask && <TaskModal
          task={ currentTask }
          show={ modalShow }
          onHide={ () => setModalShow(false) }
        />
      }
    </Container>
  );
}
