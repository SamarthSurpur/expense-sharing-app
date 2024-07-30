const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Adjust path if necessary

app.use(express.json()); // For parsing application/json

app.use('/signup', userRoutes); // Ensure the route is correctly mounted

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
