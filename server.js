const express = require('express');
const app = express();
const hbs = require('hbs');
const fs = require('fs');

const PORT =  process.env.PORT || 3030;


// MiddleWare
hbs.registerPartials(__dirname + '/views/partials'); // Support partials
app.set('view engine', 'hbs');

// create server logs
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {/*!*! requires a 3rd argument which is a callback function. Without it you will get a deprecated warning */
	if (err){console.log('Unable  to append to server.log');};
  });
  next();
});

// Maintence Route
// app.use((req, res, next) => {
//   res.render('maintainence.hbs', {
// 	pageTitle: 'Maintence Page',
// 	welcomeMessage: 'Be right Back!',
// 	copyleft: `Copyleft`
//   });
// });

app.use(express.static(__dirname +'/public'));

// ap4
// ap5


// helpers
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});


// // Routes
// app.get('/', (req,res ) => {
//   // res.send('Hello Express!');
//   // res.send('<h1>Hello Express!</h1>');
//   res.render('home.hbs', {
// 	pageTitle: 'Home Page',
// 	welcomeMessage: 'Welcome to joeyBeeBee\'s House of Handlebars!',
// 	copyleft: `Copyleft`
//   });
// });


// app.get('/about', (req, res) => {
//   res.render('about.hbs', {
// 	pageTitle: 'About Page',
//   });
// });

// app.get('/projects', (req,res ) => {
//   res.render('projects.hbs', {
// 	pageTitle: 'Projects',
// 	welcomeMessage: 'Portfolio Page Here:',
// 	copyleft: `Copyleft`
//   });
// });

// app.get('/bad', (req,res ) => {
//   res.send({
// 	errorMessage: 'Bad Route Yo, Unable to handle your request?'
//   });
// });


const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${PORT}`);
});
