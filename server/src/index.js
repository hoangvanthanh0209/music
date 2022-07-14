import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 5000
const URI = 'mongodb+srv://admin:b8VFBfEYmaifFct7@music.j2dxm.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, litmit: '30mb' }))
app.use(cors())

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connect db success')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .then(() => {
        // routes init
        routes(app)
    })
    .catch((error) => {
        console.log(error)
    })
