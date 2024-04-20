import express from 'express'
import mongoose from 'mongoose';
import { PORT, MONGODB_URI } from './config.js';

const app = express();

app.get('/', (req, res ) => {
   // console.log(req)
    return res.status(200).send("Welcome to server for backend")
})

app.post('/book', async ( req, res ) => {})

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log(" App connected to database ")
    app.listen(PORT, () => {
        console.log(`Server is listen on:  ${PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})