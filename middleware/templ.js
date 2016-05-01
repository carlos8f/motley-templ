module.exports = function container (get, set) {
  var Templ = get('vendor.templ').Templ
  var specs = get('conf.middleware.templ.specs')
  var options = get('conf.middleware.templ')
  options.handlebars = get('vendor.handlebars')
  if (specs.length) {
    var templ = new Templ(specs, options)
    set('@middleware.templ_instance', templ)
    return templ.middleware(options)
  }
  return function (req, res, next) { next() }
}