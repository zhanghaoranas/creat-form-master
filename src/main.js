import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import('./mock/index.js');
Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
	// 不要使用 import() 要不然是按需引入，会先请求之后引入mock😂
	require('./mock');
}
// 按需引入

import {
	Button,
	Field,
	Cell,
	CellGroup,
	Popup,
	Checkbox,
	CheckboxGroup,
	Radio,
	RadioGroup,
	DatetimePicker,
	Uploader,
	NavBar,
	Tab,
	Tabs,
	Overlay,
	Swipe,
	SwipeItem,
} from 'vant';
Vue.use(Button)
	.use(Field)
	.use(Cell)
	.use(CellGroup)
	.use(Popup)
	.use(Checkbox)
	.use(CheckboxGroup)
	.use(Radio)
	.use(RadioGroup)
	.use(DatetimePicker)
	.use(Uploader)
	.use(NavBar)
	.use(Tab)
	.use(Tabs)
	.use(Overlay)
	.use(Swipe)
	.use(SwipeItem);
new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
