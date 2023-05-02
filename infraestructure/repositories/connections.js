const db = require('knex')({
    client: 'mysql',
    connection: {
      host : 'admin-church.cy2t14bkvuln.us-east-1.rds.amazonaws.com',
      port : 3306,
      user : 'admin_stg',
      password : '12345678',
      database : 'admin_church_dev'
    }
  });


  module.exports = {db};