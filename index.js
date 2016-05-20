var normalize = require('commonform-normalize')
var validForm = require('commonform-validate').form

module.exports = function(form, callback) {
  if (!validForm(form)) {
    callback('Invalid form') }
  else {
    var root = normalize(form).root
    var seen = [ ]
    var definitions = form.content.reduce(
      function(definitions, element) {
        var newDefinition = (
          element.hasOwnProperty('definition') &&
          seen.indexOf(element.definition) === -1 )
        if (newDefinition) {
          definitions.push([ element.definition, root ])
          seen.push(element.definition) }
        return definitions },
      [ ])
    callback(null, definitions) } }
