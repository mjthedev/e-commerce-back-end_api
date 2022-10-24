const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT_NUMBER;



app.get('/test', (req, res) => {
    res.send('working ')
})


app.listen(PORT, console.log('app listening on port:', PORT))