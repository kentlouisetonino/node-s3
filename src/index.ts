import express, { Request, Response, json, urlencoded } from 'express'
import morgan from 'morgan'
import app from './lib/app'
import environment from './lib/environment'
import S3Route from './routes/S3Route'

// request logger
app.use(morgan('tiny'))

// make the static files available publicly
app.use(express.static('public'))

app.get('/', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: 'public' })
})

app.listen(environment.PORT, () => {
  console.log(`Server is running in http://localhost:${environment.PORT}`)
})

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api/s3', S3Route)
