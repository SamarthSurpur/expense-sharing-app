const pool = require('../config/dbconfig');

// Add an expense
exports.addExpense = async (req, res) => {
    const { description, amount, user_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO expenses (description, amount, user_id) VALUES ($1, $2, $3) RETURNING *',
            [description, amount, user_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all expenses
exports.getExpenses = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM expenses');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
