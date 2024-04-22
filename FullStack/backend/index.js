import express from 'express'
import mongoose from 'mongoose';
import { PORT, MONGODB_URI } from './config.js';
import Book from './model/bookModel.js';

const app = express();

app.use(express.json());

app.get('/', (req, res ) => {
   // console.log(req)
    return res.status(200).send("Welcome to server for backend")
})

app.post('/book', async ( req, res ) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400),send({
                message: 'Send all required fields: title, author, publishYear'
            })
        }
        const newBook = {
            title,
            author,
            publishYear,
        }

        const book = await Book.create(newBook)

        return res.status(201).send(book)
    } catch (error){
        console.log( error.message )
        res.status(500).send({
            message: error.message
        })
    }
})

// Route for get all books from database 
app.get('/book', async( req, res ) => {
    try{
       const books = await Book.find({})

       return res.status(201).json(books)
       
    } catch (error){
        console.log( error.message )
        res.status(500).send({
            message: error.message
        })
    }
})
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