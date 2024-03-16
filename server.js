const express = require('express');
const dotenv = require('dotenv');
//to load the env file, below method is used
dotenv.config({ path: './config/config.env'});

const app = express();

const PORT = process.env.PORT || 5700

app.listen(PORT, () => {
    console.log(`server is running on ${process.env.NODE_ENV} mode, @ http://localhost:${PORT}`)
})