const express = require('express');
const TaskRouter = require('./routes/task.router');

const app = express();

app.use(express.json());
app.use('/tasks', TaskRouter);

app.listen(3333, console.log('server is running...'));