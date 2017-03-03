'use strict'

const logger = require('./logger')

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  if (/svarut/i.test(data.status)) {
    logger(['statuslog', 'svarut'])
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallSvarUt'})
  }

  if (/arkivert/i.test(data.status)) {
    logger(['statuslog', 'akrivert'])
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallArkivert'})
  }

  if (/produsert/i.test(data.status)) {
    logger(['statuslog', 'produsert'])
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallVarslerProdusert'})
  }

  if (/manuell/i.test(data.status)) {
    logger(['statuslog', 'produsert', 'manuell'])
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallVarslerProdusert'})
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallManuellDistribusjon'})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
