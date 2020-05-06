const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => res.send('Hello World! - a message from your server'))

app.use(express.static('client'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
