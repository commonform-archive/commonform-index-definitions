var index = require('./')
var assert = require('assert')
var normalize = require('commonform-normalize')

var calledBack = false
var form = { content: [ 'This ', { definition: 'Agreement' }, '.' ] }
var root = normalize(form).root

index(form, function(error, values) {
  calledBack = true
  assert.ifError(error)
  assert.deepEqual(values, [ [ 'Agreement', root ] ]) })

process.on('exit', function() { assert(calledBack) })
