
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes'); // Add this if you have expense routes
require('dotenv').config();

app.use(express.json()); // To parse JSON bodies

app.use('/api', userRoutes); // Use the routes defined in userRoutes
app.use('/api/expenses', expenseRoutes); // Use the routes defined in expenseRoutes if applicable

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
