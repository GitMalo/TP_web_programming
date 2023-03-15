const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/students', (req, res) => {
  res.send([{ name: "Eric Burel",
              school: "EPF" },
            { name: "HarryPotter",
              school: "Poudlard"}])
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
