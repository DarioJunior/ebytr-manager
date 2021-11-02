import axios from 'axios';

const BASE_URL = 'http://localhost:3333/tasks';

const CREATED_STATUS = 201;

export async function addTask(
  taskNameValue,
  taskDescriptionValue,
  taskDateValue,
  taskStatusValue,
) {
  const { status } = await axios.post(BASE_URL, {
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
