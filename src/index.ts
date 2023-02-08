import express, { Request, Response, json, urlencoded } from 'express'
import morgan from 'morgan'
import app from './lib/app'
import environment from './lib/environment'
import S3Route from './routes/S3Route'

// server listener
app.listen(environment.PORT, () => {
  console.log(`Server is running in http://localhost:${environment.PORT}`)
})

// middleware
app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: true }))

// root route
app.get('/', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: 'public' })
})

// amazon s3 routes
app.use('/api/s3', S3Route)
