const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models/database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});