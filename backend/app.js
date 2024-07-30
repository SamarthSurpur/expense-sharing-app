const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', expenseRoutes);

module.exports = app;
