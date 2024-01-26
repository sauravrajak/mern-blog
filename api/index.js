import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = 3000

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log('Db is connected'))
  .catch((error) => console.log(error.message))

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}!!!`)
})
