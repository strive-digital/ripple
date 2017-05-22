require( './configuration/environment' )()
const express = require( 'express' )
const app = express()
const bodyParser = require( 'body-parser' )
const path = require( 'path' )
const passport = require( './configuration/passport' )
const flash = require( 'connect-flash' )
const cookieParser = require( 'cookie-parser' )
const session = require( 'express-session' )
const morgan = require( 'morgan' )

const index = require( './routes/index' )
const user = require( './routes/user' )

app.set( 'views', path.join( __dirname, 'views' ) )
app.set( 'view engine', 'pug' )

app.use( morgan('dev') )
app.use( cookieParser() )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( express.static( path.join( __dirname, 'public' ) ) )

app.use( session({
    secret: 'supersecretsecretshhhh',
    proxy: true,
    resave: true,
    saveUninitialized: true
  })
)

app.use( passport.initialize() )
app.use( passport.session() )
app.use( flash() )

app.use( '/', index )
app.use( '/users', user )

// catch 404 and forward to error handler
app.use( ( request, response, next ) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use( (error, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  // render the error page
  res.status(error.status || 500);
  res.render('error');
});


app.listen( 3000, () => {
  console.log( 'Express app listening on post 3000' )
})
