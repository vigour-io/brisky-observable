'use strict'
const Base = require('vigour-base')
const Observable = module.exports = new Base({
  type: 'observable',
  inject: [
    require('./on'),
    require('./emit'),
    require('./off'),
    require('./remove'),
    require('./set')
  ],
  define: {
    isObservable: true,
    filter (key) {
      if (
        key !== 'emitters' &&
        key !== 'listensOnAttach' &&
        key !== 'listensOnBase' &&
        key[0] !== '$'
      ) {
        return true
      }
    }
  },
  instances: false,
  child: 'Constructor'
}, false).Constructor

Observable.prototype.set({
  types: {
    observable: Observable.prototype,
    emitter: require('../emitter').prototype
  }
}, false)
