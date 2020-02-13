const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API running'));

// connect database
connectDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
