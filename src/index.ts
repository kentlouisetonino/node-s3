require('dotenv').config()
import { Request, Response, json, urlencoded } from 'express'

import app from './lib/app'
import environment from './lib/environment'
import S3Route from './routes/S3Route'

app.get('/', (req: Request, res: Response) => {
  res.send('Backend server is online.')
})

app.listen(environment.PORT, () => {
  console.log(`Server is running in port ${environment.PORT}`)
})

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api/s3', S3Route)
