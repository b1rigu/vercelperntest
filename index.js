const express = require('express');
const studentRoutes = require('./src/student/routes');

const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/api/v1/students', studentRoutes);

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}`));