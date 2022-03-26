const express = require('express')
const app = express()
const rapperData = require('./rapper.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Manchester United Players")
})

app.get('/rappers', (req, res) => {
    res.send(rapperData)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})