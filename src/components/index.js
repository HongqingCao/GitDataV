import particles from './particles'
import github from './github'
import icon from './icon'
import header from './header'
import foot from './foot'
import bg from './bg'
import databox from './databox'
import nodata from './nodata'
import nouser from './nouser'
import loading from './loading'
import topnav from './topnav'
const components = {
	header,
	foot,
	bg,
	icon,
	particles,
	github,
	databox,
	nodata,
	nouser,
	loading,
	topnav
}

const install = (Vue, options = {}) => {
  if (install.installed) return
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })
  Vue.prototype.$notice = Notification
 // Vue.prototype.$message = Message
  install.installed = true
}
install.installed = false
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  install.installed = true
}

const Vcomp = {
  ...components,
  install
}

export default Vcomp