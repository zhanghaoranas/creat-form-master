import Vue from 'vue';
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
import App from './App.vue';
import router from './router';

/**
if (process.env.NODE_ENV === 'development') {
	// 不要使用 import() 要不然是按需引入，会先请求之后引入mock😂
	require('./mock');
}
 */

Vue.config.productionTip = false;

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
