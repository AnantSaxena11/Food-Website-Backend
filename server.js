import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// App Config 

const app = express()
const port = 4000

//middleware

app.use(express.json())
app.use(cors())

// db connection 

connectDB()


// api endpoint

app.use("/api/food",foodRouter)


app.get("/",(req,res) => {
    res.send("Hello World Hi")
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})

