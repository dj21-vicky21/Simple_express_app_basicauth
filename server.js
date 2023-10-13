const express = require('express')
const cors = require('cors')
const router =require('./api/Router')
const basicAuth = require('express-basic-auth');
const { checkSourceHeader } = require('./utils')

require("dotenv").config(); 

const app = express()
const PORT = process.env.PORT || 5000
const {USERNAME , PASSWORD } = process.env

const basicAuthConfig = {
    users: { [USERNAME] : PASSWORD },
    challenge: true,
};

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use(checkSourceHeader);
app.use(cors());
app.use(basicAuth(basicAuthConfig));
app.use(express.urlencoded({ extended: false }));
app.use(router)

app.listen(PORT,()=>{
    console.log(`listinging on ${PORT}`);
})