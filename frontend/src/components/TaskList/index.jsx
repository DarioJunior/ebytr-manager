import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskModal from '../TaskModal';

import { getAllTasks, deleteTask } from '../../api/task.services';
import addTasksList from '../../actions/tasks.actions';

import {
  Button,
  Container,
  ParagraphDescription,
  ParagraphName,
  ParagraphStatus,
  TaskContainer,
  InputSelect,
} from './styles';

export default function TaskList() {
  const IS_LOADING_STORE = useSelector((state) => state.TasksReducer.isLoading);
  // const TASK_LIST_STORE = useSelector((state) => state.TasksReducer.tasks);

  const [isLoading, setIsLoading] = useState(IS_LOADING_STORE);
  const [taskList, setTaskList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [currentTask, setCurrentTask] = useState(false);
  const [taskOrder, setTaskOrder] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getAllTasks();
      if (data.length !== 0) {
        await dispatch(addTasksList(data));
        setTaskList(data);
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    if (isLoading && taskList !== []) {
      setIsLoading(false);
    }
  }, [isLoading, taskList]);

  // https://stackoverflow.com/questions/8900732/sort-objects-in-an-array-alphabetically-on-one-property-of-the-array
  useEffect(() => {
    if (taskOrder === 'Alphabetic') {
      const tasks = taskList.sort(
        (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
      );
      setIsLoading(true);
      setTaskList(tasks);
    }

    if (taskOrder === 'Date') {
      const tasks = taskList.sort(
        (a, b) => a.date.toLowerCase().localeCompare(b.date.toLowerCase()),
      );
      setIsLoading(true);
      setTaskList(tasks);
    }

    if (taskOrder === 'Status') {
      const tasks = taskList.sort(
        (a, b) => a.status.toLowerCase().localeCompare(b.status.toLowerCase()),s
      );
      setIsLoading(true);
      setTaskList(tasks);
    }
  }, [taskOrder]);

  const handleTaskDelete = async (task) => {
    const { _id } = task;
    const success = await deleteTask(
      _id,
    );

    if (success) {
      document.location.reload(false);
      return onHide();
    }
  };

  return (
    <Container>
      <InputSelect
        value={ taskOrder }
        onChange={ ({ target }) => setTaskOrder(target.value) }
      >
        <option value="Order by">Order by</option>
        <option value="Alphabetic">Alphabetic</option>
        <option value="Date">Date</option>
        <option value="Status">Status</option>
      </InputSelect>
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
                onClick={ () => { handleTaskDelete(task); } }
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
