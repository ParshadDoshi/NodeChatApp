const path = require('path')
const express = require('express');
const dotenv = require('dotenv')

dotenv.config();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 5000
console.log(process.env.PORT);
const app = express();
app.use(express.static(publicPath))
app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})