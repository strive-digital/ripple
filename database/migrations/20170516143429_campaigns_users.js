exports.up = knex =>
  knex.schema.createTable( 'campaigns_users', table => {
    table.integer( 'user_id' ).notNullable()
    table.foreign( 'user_id' ).references( 'users.id' )
    table.integer( 'campaign_id' ).notNullable()
    table.foreign( 'campaign_id' ).references( 'campaigns.id' )
  })

exports.down = knex => knex.schema.dropTable( 'campaigns_users' )
