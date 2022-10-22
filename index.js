//First I've add to my package.json "type: module"
//I've imported express and bodyParser
import express from "express"
import bodyParser from "body-parser"
import { books } from "./data/books.js"
import axios from "axios";

//I initialize express
const app = express();
//I've declared the port where I locally will run the server
const PORT = process.env.PORT || 1313;

//bodyParser convert 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//1st endpoint 
//this route will get the list of the books on my fake dataBase
app.get("/books", (req, res) => {
    res.statusCode = 200; //means thew request was successfully completed
    res.json(books)
})

//I wanna get a book by its ID
//I create for it a route using GET verb, because I wanna get something for the server
app.get("/book/:id", (req, res) => {

    //first I have to check if the param it's gonna be a number
    //all books ID are number, so if the request is Not a Number, it's gonna stop at the very beginning
    if(isNaN(req.params.id)) {
        //return the status code of the error
        res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id);

        let book = books.find(b => {
            b.id === id
        })

        if(book !== undefined) {
            res.statusCode =200;
            res.json(book);
        } else {
            res.sendStatus(404)

        }
    }
})

//----------------------------------
//Third I listen the port where my server will locally run
app.listen(1313, () => {
    console.log(`Server running port: ${PORT}`)
})