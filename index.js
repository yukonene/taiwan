const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use('/img', express.static('/img'));
app.use('/static', express.static(__dirname + '/public'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the root endpoint!' })
})

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})