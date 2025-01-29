const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    res.json({
        message1: 'I AM Vishal',
        message2: 'HELLO FROM THE SERVER!'
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});