
exports.up = knex =>
  knex.schema.createTable( 'organizations', table => {
    table.increments( 'id' ).primary()
    table.integer( 'user_id' ).notNullable()
    table.foreign( 'user_id' ).references( 'users.id' )
    table.string( 'name' ).notNullable()
    table.string( 'logo_url' )
    table.string( 'website' )
    table.timestamps( true, true )
  })


exports.down = knex => knex.schema.dropTable( 'organizations' )
