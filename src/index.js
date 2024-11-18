import express from 'express'
import mainMenu from './todo.js'
const app = express(); 

app.use(express.static('public'))
app.listen(3000) // for html based todo // practice for DOM Manuplation // not persisted

// console based todo persisted 
mainMenu(); 
