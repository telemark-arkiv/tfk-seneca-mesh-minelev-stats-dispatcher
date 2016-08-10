'use strict'

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  Seneca.act({role: 'counter', cmd: 'subtract', key: 'minelev/queue'})

  return callback(null, {success: true, msg: 'Stats submitted'})
}
