'use strict'

const queueAdd = require('./queue-add')
const queueDelete = require('./queue-delete')
const statuslog = require('./statuslog')
const preview = require('./preview')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:info, info:queue, msg:add', queueAdd)

  seneca.add('role:info, info:queue, msg:delete', queueDelete)

  seneca.add('role:info, info:statuslog, msg:add', statuslog)

  seneca.add('role:info, info:preview', preview)

  return {
    name: options.tag || 'tfk-seneca-minelev-stats-dispatcher'
  }
}
