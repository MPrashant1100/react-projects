import express from 'express'
import { PORT, MONGODB_URI } from './config.js';

const app = express();

app.get('/get', (req, res ) => {
   // console.log(req)
    return res.status(200).send("Welcome to server for backend")
})
app.listen(PORT, () => {
    console.log(`Server is listen on:  ${PORT}`)
})

mongoose.connect( )