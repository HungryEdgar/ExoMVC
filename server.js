//---------------------------Import Express-----------------------------
let express = require('express')


//---------------------------Initialize the app-------------------------
let app = express()
app.use(express.urlencoded({extended : true}));


//---------------------------Use the router-----------------------------
let routes = require('./routes');
app.use('/', routes);

//--------------------------Use session--------------------------------
let session = require('express-session')
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
}))


app.get('/user', (req, res) => {
    let pseudo = {"pseudo":req.body.pseudo};
    res.render('hello.ejs', {"pseudo" : pseudo});

});

//---------------------------Button links-------------------------------
app.get('/basket', (req, res) => {
    res.render('basket.ejs');
   });

app.get('/home', (req, res) => {
    res.render('home.ejs');
});

app.get('/login', (req, res) => {
    res.render('logIn.ejs');
});
app.get('/flogin', (req, res) => {
    res.render('finalLogIn.ejs');
});


//---------------------------The port we're using-----------------------
app.listen(3000, function() {
    console.log('Server is running on port 3000')
});