'use strict'

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  if (/svarut/i.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallSvarUt'})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
