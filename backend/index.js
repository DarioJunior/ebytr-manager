const express = require('express');
const cors = require('cors');
const TaskRouter = require('./routes/task.router');
const LoginRouter = require('./routes/login.router');

const ApiErrorHandler = require('./middlewares/error.middleware');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tasks', TaskRouter);
app.use('/login', LoginRouter);

app.use(ApiErrorHandler);

app.listen(3333, console.log('server is running...'));