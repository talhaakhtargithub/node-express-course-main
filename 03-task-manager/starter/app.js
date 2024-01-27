const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');
require('./db/connect')
// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

// Using express.json() instead of bodyParser.json()
app.use(express.json());
app.use('/tasks', tasksRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server listening on port", port);
});
