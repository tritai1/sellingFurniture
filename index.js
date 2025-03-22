const bodyParser = require('body-parser');
const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const database = require('./config/connect')
const router = require("./api/v1/router/index.router")
require('dotenv').config();
const app = express();
database.connect();
const PORT = process.env.PORT;

app.use(cookieParser())
app.use(cors());
app.use(bodyParser.json());


router(app);


app.listen(PORT, ()=>{
    console.log("connect success", `${PORT}`);
    
})