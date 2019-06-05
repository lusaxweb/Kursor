import kursor from '../../src'
import '../../src/styles/index.styl'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData
}) => {
  // ...apply enhancements to the app
  var kursorx = new kursor({
    removeDefaultCursor: true
  })

  Vue.prototype.$mykursor = kursorx

  Vue.prototype.$kursor = kursor
  // Vue.use(kursor)
  // console.log(kursor)
}
