const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require("helmet");
const compression = require('compression')

app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

//init db
require('./dbs/init.mongodb')
const {checkOverload} = require("./helper/check.connect");
checkOverload()

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "Welcome server!"
    })
})
module.exports = app