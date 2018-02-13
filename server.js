import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
global.config = require('./config/config')

import router from './routes'
import winston from 'winston'

winston.info('Starting application')

let app = express()

winston.info('Initializing express')

mongoose.set('debug', false)

mongoose.connect(`mongodb://${global.config.MONGODB_HOST}/${global.config.MONGODB_COLLECTION_NAME}`)

mongoose.connection.on('connected', function () {
    winston.info('MongoDB event connected')
})

mongoose.connection.on('disconnected', function () {
    winston.warn('MongoDB event disconnected')
})

mongoose.connection.on('reconnected', function () {
    winston.info('MongoDB event reconnected')
})

mongoose.connection.on('error', (err) => {
    winston.info('Mongoose connection error: ', +err)
})

app.use(bodyParser.urlencoded({ 'extended': true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', router)

// Just to test our server is working
app.get('/api', (req, res) => {
    res.send({
        version: '1.0.0'
    })
})

winston.info('server.js listen: Going to start app on the provided port. ')
winston.info('Creating HTTP server on port: %s', global.config.PORT)

app.listen(global.config.PORT, () => {
    winston.info('HTTP Server listening on port: %s', global.config.PORT)
})

export default app