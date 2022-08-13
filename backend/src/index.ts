require('dotenv').config()
import express, { Request, Response } from 'express'

import App from './lib/app'
import UploadRoute from './routes/uploadRoute'
import Environment from './lib/environment'

App.get('/', (req: Request, res: Response) => {
  res.send('Backend server is online.')
})

App.listen(Environment.PORT, () => {
  console.log(`Server is running in port ${Environment.PORT}`)
})

App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.use('/api/upload', UploadRoute)
