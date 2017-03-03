'use strict'

const logger = require('./logger')

module.exports = function (args, callback) {
  const Seneca = this

  logger(['queue-delete', 'deleted'])
  Seneca.act({role: 'counter', cmd: 'subtract', key: 'minelev/queue'})

  return callback(null, {success: true, msg: 'Stats submitted'})
}
