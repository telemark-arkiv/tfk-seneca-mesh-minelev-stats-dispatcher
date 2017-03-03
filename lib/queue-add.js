'use strict'

const device = require('device')
const logger = require('./logger')

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  logger(['queue-add', 'starter'])

  Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/queue'})

  Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/antallVarsler'})

  if (data.skjemaUtfyllingStart && data.skjemaUtfyllingStop) {
    const skjemaUtfyllingTime = parseInt(data.skjemaUtfyllingStop, 10) - parseInt(data.skjemaUtfyllingStart, 10)
    logger(['queue-add', 'skjemautfylling', skjemaUtfyllingTime])
    Seneca.act({role: 'counter', cmd: 'add', key: 'minelev/skjemaUtfyllingTime', value: skjemaUtfyllingTime})
  }

  if (data.userAgent) {
    const thisDevice = device(data.userAgent)
    const thisDeviceKey = `minelev/${thisDevice.type}`
    logger(['queue-add', 'userAgent', thisDeviceKey])
    Seneca.act({role: 'counter', cmd: 'add', key: thisDeviceKey})
  }

  if (data.schoolId) {
    const skoleId = `minelev/antall${data.schoolId}`
    logger(['queue-add', 'antall', skoleId])
    Seneca.act({role: 'counter', cmd: 'add', key: skoleId})
  }

  if (data.documentCategory) {
    const varselType = `minelev/${data.documentCategory}`
    logger(['queue-add', 'documentCategory', varselType])
    Seneca.act({role: 'counter', cmd: 'add', key: varselType})
  }

  return callback(null, {success: true, msg: 'Stats submitted'})
}
