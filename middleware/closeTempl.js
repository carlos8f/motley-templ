module.exports = function container (get, set) {
  return function closeTempl (cb) {
    var templ_instance = get('middleware.templ_instance')
    if (templ_instance) {
      get('vendor.console').log('motley-templ: closing templ.')
      templ_instance.close()
      get('vendor.console').log('motley-templ: closed templ.')
      setImmediate(cb)
    }
    else setImmediate(cb)
  }
}