
exports.up = knex =>
  knex.schema.createTable( 'organizations', table => {
    table.increments( 'id' ).primary()
    table.integer( 'user_id' ).notNullable()
    table.string( 'user_name' ).notNullable()
    table.string( 'organization_name' ).notNullable()
    table.string( 'logo' )
    table.string( 'website' )
    table.timestamps( true, true )
  })


exports.down = knex => knex.schema.dropTable( 'organizations' )
