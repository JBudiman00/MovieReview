var mysql = require('mysql');
const config = require('../config')

const conn_pool = mysql.createPool(config.db);

module.exports = conn_pool;