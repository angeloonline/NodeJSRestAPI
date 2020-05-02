import express from 'express'
import load from 'dotenv'
import path from 'path'
import DBConnection from './db/DBConnection'
import postRouter from './routers/post'
import swaggerUi  from 'swagger-ui-express'
import apiDocumentation from './doc/apiDocumentation'


// configure dotenv to retrieve environment variables
load.config()

console.log(`Connecting to ${process.env.MONGODB_URL} uri`)


DBConnection(process.env.MONGODB_URL)
  .then(() => console.log('Connection ok'))
  .catch(error => console.log('Connection to MongoDB failed'))

// use express as framework
var app = express()

// Middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
// to support JSON-encoded bodies
app.use(express.json())
// to support URL-encoded bodies
app.use(express.urlencoded({extended: true})); 

app.use('/posts', postRouter)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})