import express from "express"
import bodyParser from "body-parser"

const app = express();
const PORT = process.env.PORT || 1313;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(1313, () => {
    console.log(`Server running port: ${PORT}`)
})