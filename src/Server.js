const PORT = 8000
const cheerio = require('cheerio')
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors());
const url = 'http://winaung.com'


app.get('/result', (req, res) => {
  axios(url)
        .then(response => {
          const html = response.data
          const $ = cheerio.load(html)
          
          const paragraphs = []
  
          $('#about p').each(function() {
            const paragraph = $(this).text()
            paragraphs.push({
              paragraph,
            })
          })
          res.json(paragraphs)
        })

})



app.listen(PORT, () => console.log('port 8000'));