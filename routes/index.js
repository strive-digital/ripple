const express = require( 'express' )
const router = express.Router()
// const db = require( '../database/db')

console.log('Hello im in router/index')
router.get('/', (req, res) => {
  res.send("Hello World!")
})

module.exports = router
