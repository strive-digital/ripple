const db = require('./db')

const CREATE_CAMPAIGN = "INSERT INTO campaigns ( name, organization_id ) VALUES ( $1, $2 ) RETURNING *"

const GET_ALL = "SELECT * FROM campaigns WHERE organization_id = $1"

const GET_BY_ID = "SELECT * FROM campaigns WHERE id = $1"

const Organization = {
  createCampaign: ( name, organizationID ) => db.one( CREATE_CAMPAIGN, [name, organizationID]),

  getAllCampaigns: ( organizationID ) => db.any( GET_ALL, [organizationID]),

  getCampaignByID: ( campaignID ) => db.any( GET_BY_ID, [campaignID])
}

module.exports = Organization
