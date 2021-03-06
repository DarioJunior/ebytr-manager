import axios from 'axios';

const BASE_URL = 'http://localhost:3333/tasks';

const CREATED_STATUS = 201;

export async function addTask(
  taskNameValue,
  taskDescriptionValue,
  taskDateValue,
  taskStatusValue,
) {
  const token = JSON.parse(localStorage.getItem('token'));

  const { status } = await axios.post(BASE_URL, {
    taskNameValue,
    taskDescriptionValue,
    taskDateValue,
    taskStatusValue,
  }, {
    headers: { Authorization: token },
  });

  if (status === CREATED_STATUS) {
    return true;
  }
  return false;
}

export async function getAllTasks() {
  const token = JSON.parse(localStorage.getItem('token'));
  const { data } = await axios.get(
    BASE_URL,
    { headers: { Authorization: token } },
  );
  return data;
}

export async function editTask(
  taskId,
  taskNameValue,
  taskDescriptionValue,
  taskDateValue,
  taskStatusValue,
) {
  const token = JSON.parse(localStorage.getItem('token'));

  const result = await axios.put(BASE_URL, {
    taskId,
    taskNameValue,
    taskDescriptionValue,
    taskDateValue,
    taskStatusValue,
  },
  { headers: { Authorization: token } });

  return result;
}

export async function deleteTask(taskId) {
  const token = JSON.parse(localStorage.getItem('token'));
  const { status } = await axios.delete(
    `${BASE_URL}/${taskId}`,
    { headers: { Authorization: token } },
  );

  if (status === 200) {
    console.log('deletado');
    return true;
  }

  return false;
}
