'use strict'

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  if (/svarut/i.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallSvarUt'})
  }

  if (/arkivert/i.test(data.status)) {
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallArkivert'})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
