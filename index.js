const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');
app.set('view engine', 'ejs')
//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Our Home Page';
  var heading = 'Twitch and Youtube Content Creator';//changes myfirstbootstap
   res.render('pages/index',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/users', (req, res) => {
  var title = 'Our Home Page';
  var heading = 'Twitch and Youtube Content Creator';//changes myfirstbootstap
   res.render('users/index',{
     'title':title,
     'heading':heading, 
     'users':data
   });//routes to pages
})

app.get('/about', (req, res) => {
  var title = 'Our About Page';
  var heading = 'Content Creators';
   res.render('pages/about',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/aceu', (req, res) => {
  var title = 'Aceu';
  var heading = 'Aceu Content Creator';
   res.render('pages/aceu',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/39daph', (req, res) => {
  var title = '39daph';
  var heading = '39daph Content Creator';
   res.render('pages/39daph',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/trainwreck', (req, res) => {
  var title = 'TrainwreckTV';
  var heading = 'TrainwreckTV Content Creator';
   res.render('pages/trainwreck',{
     'title':title,
     'heading':heading
   });//routes to pages
})

app.get('/xqc', (req, res) => {
  var title = 'XQC';
  var heading = 'XQC Content Creator';
   res.render('pages/xqc',{
     'title':title,
     'heading':heading
   });//routes to pages
})


//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 var heading = "Twitch and Youtube Content Creator";
 res.render('users/view', {
     title: title,
     'heading': heading,
     user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

