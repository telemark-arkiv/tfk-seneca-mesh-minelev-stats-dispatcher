'use strict'

const device = require('device')

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/queue'})

  Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallVarsler'})

  if (data.skjemaUtfyllingStart && data.skjemaUtfyllingStop) {
    const skjemaUtfyllingTime = data.skjemaUtfyllingStop - data.skjemaUtfyllingStart
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/skjemaUtfyllingTime', value: skjemaUtfyllingTime})
  }

  if (data.userAgent) {
    const userDevice = device(data.userAgent)
    const deviceTypeKey = `minelev/${userDevice.type}`
    Seneca.act({role: 'counter', cmd: 'add', key: deviceTypeKey})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
