const express = require('express');
const res = require('express/lib/response');

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/posts', (req, res) => {
    res.send('postman');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
