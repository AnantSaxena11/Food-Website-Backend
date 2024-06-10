import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"

// App Config 

const app = express()
const port = 4000

//middleware

app.use(express.json())
app.use(cors())

// db connection 

connectDB();

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})

//mongodb+srv://anantsaxena5454:LyhR-cj!PK86Pix@cluster0.k1cjcl4.mongodb.net/?