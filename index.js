const express = require('express')
const app = express()
const port = 5001
const repository = require('./repository')
const config = require('./config')



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/GetCategories', async (req, res) => {
    let categories = await repository.GetCategories(config.DbConfig)
    res.send(categories)
})

app.get('/GetQuestions', async (req, res) => {
    let questions = await repository.GetQuestions(config.DbConfig)
    res.send(questions)
})

