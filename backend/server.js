const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const { dbConnect } = require('./utils/db.js');

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use('/api', require('./routes/authRoute.js'));

dbConnect();

app.get('/', (req, res) => {
    res.send('my backend')
})

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})