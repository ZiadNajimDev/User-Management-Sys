const db = require('../models/database');

const getAllUsers = (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};

const createUser = (req, res) => {
    const { name, email, password } = req.body;
  
    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields: name, email, password' });
    }
  
    db.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
      function (err) {
        if (err) {
          if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(400).json({ error: 'Email already exists' });
          }
          return res.status(400).json({ error: err.message });
        }
        res.json({ id: this.lastID });
      }
    );
  };
const getUserById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  db.run(
    'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
    [name, email, password, id],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ changes: this.changes });
    }
  );
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ changes: this.changes });
  });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};