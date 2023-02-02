const express = require('express')
const app = express()
const port = 5001
const repository = require('./repository')
const config = require('./config')

app.use(express.json())

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


// Forms
app.get('/form/:userId', async (req, res) => {
    let forms = await repository.GetForms(config.DbConfig, req.params.userId)
    res.send(forms)
})

app.post('/form', async (req, res) => {
    let formId = await repository.CreateForm(config.DbConfig)
    res.send(formId)
})


// User Data
app.get('/userData/:userId', async(req, res) => {
    let userData = await repository.GeteUserData(config.DbConfig, req.params.userId)
    res.send(userData)
})

app.post('/userData', async(req, res) => {
    let userData = await repository.CreateUserData(config.DbConfig, req.body)
    res.send('adding user data for form ' + req.body.FormId)
})