import express from "express"

const app = express()

app.use(express.urlencoded(
    {
        extended:true
    }
))
app.use(express.json())
app.use(cookieParser())



//routes
import Postroutes from "../routes/post.routes.js"
import Getroutes from "../routes/get.routes.js"
import cookieParser from "cookie-parser"

app.use('/api/v1', Postroutes)
app.use('/api/v1', Getroutes)




export { app }