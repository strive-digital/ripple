exports.up = knex =>
  knex.schema.createTable( 'signups', table => {
    table.increments( 'id' ).primary()
    table.integer( 'campaign_id' ).notNullable()
    table.foreign( 'campaign_id' ).references( 'campaigns.id' )
    table.integer( 'subscriber_id' ).notNullable()
    table.foreign( 'subscriber_id' ).references( 'subscribers.id' )
    table.timestamps( true, true )
  })

exports.down = knex => knex.schema.dropTable( 'signups' )
