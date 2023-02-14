const express = require('express')
const cors = require('cors')
const app = express()
const port = 5001
const repository = require('./src/repository')
const bodyParser = require('body-parser')

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/GetCategories', async (req, res) => {
    let categories = await repository.GetCategories()
    res.send(categories)
})

app.get('/GetQuestions', async (req, res) => {
    let questions = await repository.GetQuestions()
    res.send(questions)
})


// Forms
app.get('/form/:userId', async (req, res) => {
    let forms = await repository.GetForms(req.params.userId)
    res.send(forms)
})

app.post('/form/:userId', async (req, res) => {
    let formId = await repository.CreateForm(req.params.userId)
    res.send(formId)
})


// User Data
app.get('/userData/:userId', async(req, res) => {
    let userData = await repository.GeteUserData(req.params.userId)
    res.send(userData)
})

app.post('/userData', async(req, res) => {
    let userData = await repository.CreateUserData(req.body)
    res.send(userData)
})