const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'Our Home Page';
  var heading = 'My Website Name';//changes myfirstbootstap
   res.render('pages/index',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/about', (req, res) => {
  var title = 'Our About Page';
  var heading = 'My Website Name';//changes myfirstbootstap
   res.render('pages/about',{
     'title':title,
     'heading':heading
   });//routes to pages
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

