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
    const thisDevice = device(data.userAgent)
    const thisDeviceKey = `minelev/${thisDevice.type}`
    Seneca.act({role: 'counter', cmd: 'add', key: thisDeviceKey})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
