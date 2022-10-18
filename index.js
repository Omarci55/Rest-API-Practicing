//First I've add to my package.json "type: module"
//I've imported express and bodyParser
import express from "express"
import bodyParser from "body-parser"

//I initialize express
const app = express();
//I've declared the port where I locally will run the server
const PORT = process.env.PORT || 1313;

//bodyParser convert 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//fake dataBase just to practice
let dataBase = {
    books: [
        {
            id: 13,
            title: "E foi assim",
            year: 2019,
            stock: true
        },
        {
            id: 26,
            title: "Ou foi daquele jeito",
            year: 2020,
            stock: true
        },
        {
            id: 39,
            title: "Nem sei mais",
            year: 2021,
            stock: false
        }
    ]
}

app.get("/", () => {
    
})

//Third I listen the port where my server will locally run
app.listen(1313, () => {
    console.log(`Server running port: ${PORT}`)
})