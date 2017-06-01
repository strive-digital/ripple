
exports.up = knex =>
  knex.schema.table( 'campaigns', table => {
    table.integer( 'organizations_id' ).notNullable()
    table.foreign( 'organizations_id' ).references( 'organizations.id' )
  })


exports.down = knex =>
   knex.schema.table( 'campaigns', table => {
    table.dropColumn( 'campaigns' )
  })
