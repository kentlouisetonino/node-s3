require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/', (req: any, res: any) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
