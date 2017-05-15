const express = require( 'express' )
const app = express()
const bodyParser = require( 'body-parser' )
const path = require( 'path' )
const loadEnvironment = require('./configuration/environment')()

const index = require( './routes/index' )

// set up view engine
app.set( 'views', path.join( __dirname, 'views' ) )
app.set( 'view engine', 'pug' )

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use( express.static( path.join( __dirname, 'public' ) ) )

app.use( '/', index )

app.listen( 3000, () => {
  console.log( 'Express app listening on post 3000')
})
