exports.up = knex =>
  knex.schema.createTable( 'outgoing_messages', table => {
    table.increments( 'id' ).primary()
    table.integer( 'campaign_id' ).notNullable()
    table.foreign( 'campaign_id' ).references( 'campaigns.id' )
    table.integer( 'recipients' ).notNullable()
    table.timestamp( 'created_at' ).defaultTo( knex.fn.now() )
  })

exports.down = knex => knex.schema.dropTable( 'outgoing_messages' )
