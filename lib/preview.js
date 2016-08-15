'use strict'

module.exports = function (args, callback) {
  const Seneca = this

  Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallPreviewsGenerated'})

  return callback(null, {success: true, msg: 'Stats submitted'})
}
