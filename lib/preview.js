'use strict'

const logger = require('./logger')

module.exports = function (args, callback) {
  const Seneca = this

  Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallPreviewsGenerated'})

  logger(['preview', 'Nytt preview er generert'])

  return callback(null, {success: true, msg: 'Stats submitted'})
}
