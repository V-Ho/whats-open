import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

app.use((req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    next()
})

app.use(cors())

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

module.exports = app