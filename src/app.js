import express from "express"

const app = express()

app.use(express.urlencoded(
    {
        extended:true
    }
))
app.use(express.json())



//routes
import Postroutes from "../routes/post.routes.js"

app.use('/api/v1', Postroutes)



export { app }