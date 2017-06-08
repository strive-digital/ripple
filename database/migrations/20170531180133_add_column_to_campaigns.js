
exports.up = knex =>
  knex.schema.table( 'campaigns', table => {
    table.integer( 'organization_id' ).notNullable()
    table.foreign( 'organization_id' ).references( 'organizations.id' )
  })


exports.down = knex =>
   knex.schema.table( 'campaigns', table => {
    table.dropColumn( 'organization_id' )
  })
