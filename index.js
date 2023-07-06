const express = require('express');
const studentRoutes = require('./src/student/routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/api/v1/students', studentRoutes);

app.listen(5000, () => console.log(`app listening on port ${5000}`));