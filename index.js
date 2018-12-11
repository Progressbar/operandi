const opn = require('opn')
const express = require('express')
const path = require('path')
const normalizeUrl = require('normalize-url')

const app = new express()
const port = 80
const publicDir = path.join(__dirname, 'public')

app.use(express.static(publicDir))
app.use(express.json())

app.post('/open-url', (req, res) => {
    const { body } = req
    const { url } = body
    opn(normalizeUrl(url))
    res.sendStatus(200)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))