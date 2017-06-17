const express = require( 'express' )
const router = express.Router()
const Organization = require( '../../database/organization' )


router.get('/:id', ( request, response ) => {
  const { id } = request.params

  Organization.getAllCampaigns( id )
    .then( campaigns => {
      response.send( campaigns )
    })
})
router.get( '/:id/campaigns/:camp_id', (request, response) => {
  const { camp_id } = request.params

  Organization.getCampaignByID( camp_id )
    .then( campaign => {
      response.send( campaign )
    })
})

router.post( '/:id/create_campaign', ( request, response ) => {
  const { name } = request.body
  const { id } = request.params
  Organization.createCampaign( name, id )
    .then( result => {
      //redirect to admin landing page?
      console.log('result:', result)
      response.send( result )
    })
})

module.exports = router
