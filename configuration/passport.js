const passport = require( 'passport' )
const LocalStrategy = require( 'passport-local' ).Strategy

const User = require( '../database/user' )

const strategy = new LocalStrategy({
    usernameField: 'email',
    session: false,
    passReqToCallback: true
}, ( request, email, password, done ) => {
  User.findByEmail( email )
    .then( user => {
      if( User.validPassword( password,  user.password ) ) {
        return done( null, user )
      } else {
        return done( null, false, request.flash( 'message', 'Oops! Wrong password.' ))
      }
    })
    .catch( error => {
      if( error.name === 'QueryResultError' ) {
        return done( null, false, request.flash( 'message', 'Seems we don\'t have your email...' ) )
      } else {
        // render error page passing in error object
        return done( error )
      }
    })
})

passport.serializeUser( ( user, done ) => done( null, user.id ) )

passport.deserializeUser( ( id, done ) => {
  User.findById( id )
    .then( user => {
      return done( null, user )
    })
    .catch ( error => {
      console.error( 'Error trying to deserialize user: ', error)
      return done( error )
    })
})

passport.use( strategy )

module.exports = passport
