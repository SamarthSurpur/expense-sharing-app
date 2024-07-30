const pool = require('../config/dbconfig');

const createExpense = async (description, amount, userId) => {
  const result = await pool.query(
    'INSERT INTO expenses (description, amount, user_id) VALUES ($1, $2, $3) RETURNING *',
    [description, amount, userId]
  );
  return result.rows[0];
};

const getAllExpenses = async () => {
  const result = await pool.query('SELECT * FROM expenses');
  return result.rows;
};

module.exports = { createExpense, getAllExpenses };
