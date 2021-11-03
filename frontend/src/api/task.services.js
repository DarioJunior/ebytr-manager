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
    headers: { Authorization: `Bearer ${token}` },
  }, {
    taskNameValue,
    taskDescriptionValue,
    taskDateValue,
    taskStatusValue,
  });

  if (status === CREATED_STATUS) {
    return true;
  }
  return false;
}

export async function getAllTasks() {
  const { data } = await axios.get(BASE_URL, { headers: { Authorization: 'xxxxx' } });
  return data;
}
