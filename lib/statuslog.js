'use strict'

module.exports = function (args, callback) {
  const Seneca = this
  const data = args.data

  return callback(null, {success: true, msg: 'Stats submitted'})
}
