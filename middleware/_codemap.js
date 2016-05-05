module.exports = {
  _ns: 'motley',

  'middleware.templ': require('./templ'),
  'middleware.closeTempl': require('./closeTempl'),
  'middleware[-60]': '#middleware.templ',
  'middleware.templ_instance': null
}