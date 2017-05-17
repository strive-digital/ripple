const express = require( 'express' )
const router = express.Router()

router.get( '/', ( request, response ) => {
  response.render( "index", { title: "Ripple",  message: request.flash( 'message' ) } )
})

module.exports = router
