import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
	{
		path: '/',
		name: 'preview',
		component: () => import('../views/Preview.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
