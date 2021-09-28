const express = require('express')
const bodyParser = require('body-parser')
const { errorFunction, getAllStudents, renderAllStudents, addNewStudent, updateStudent, deleteStudent } = require('./controllers/controller-students')

const PORT = 1800
const app = express()

app.use(express.static('public'))

app.get('/students', renderAllStudents)

app.get('/api/students', getAllStudents)

app.post('/api/students', bodyParser.json(), addNewStudent)

app.put('/api/students/:id', bodyParser.json(), updateStudent)

app.delete('/api/students/:id', deleteStudent)

app.get('*', errorFunction)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`) // eslint-disable-line no-console
})