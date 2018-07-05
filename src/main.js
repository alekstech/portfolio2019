import Vue from 'vue'
import App from './App'
import router from './router'
import {
	Vuetify,
	VApp,
	VNavigationDrawer,
	VFooter,
	VList,
	VBtn,
	VIcon,
	VGrid,
	VToolbar,
	transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
	components: {
		VApp,
		VNavigationDrawer,
		VFooter,
		VList,
		VBtn,
		VIcon,
		VGrid,
		VToolbar,
		transitions
	},
	theme: {
		primary: '#272d2d',
		secondary: '#00525E',
		accent: '#F4EDE6',
		info: '#8AB6C1',
		success: '#00AA88',
		warning: '#F4AC45',
		error: '#EF626C'
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
