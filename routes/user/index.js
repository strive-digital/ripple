const express = require( 'express' )
const router = express.Router()
const passport = require( '../../configuration/passport' )
const User = require( '../../database/user' )
const authConfig = {
  successRedirect: '/users/profile',
  failureRedirect: '/',
  failureFlash: true
}

router.post( '/signup', ( request, response, next ) => {
  const { email, password } = request.body

  User.findByEmail( email )
    .then( user => {
      request.flash( 'message', 'Email already registered.' )
      response.redirect( '/' )
    })
    .catch( error => {
      if( error.name === 'QueryResultError' ) {
        const { hash, salt } = User.generateHash( password )

        User.create( email, hash, salt )
          .then( user => {
            request.login( user, error => {
              if( error ) {
                return next( error )
              } else {
                response.redirect( '/users/profile' )
              }
            })
          })
          .catch( error => {
            response.render( 'Error Creating User: ', { error } )
          })
      } else {
        response.render( 'Error Finding User By Email: ', { error } )
      }
    })
})

router.post( '/login', passport.authenticate( 'local', authConfig ))

router.post( '/logout', ( request, response ) => {
  request.logout()
  request.flash( 'message', 'Logged out successfully!' )
  response.redirect('/')
})

router.get( '/profile', ( request, response ) => {
  if ( request.user ) {
    response.render( 'user/index', { user: request.user } )
  } else {
    request.flash( 'message', 'Please log in.' )
    response.redirect( '/' )
  }
})

module.exports = router
