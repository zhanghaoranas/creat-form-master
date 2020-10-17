import axios from 'axios';
import qs from 'qs';
import {baseURL, token} from '../../config';
// 生成axios 实例 保证axios
const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {'X-Access-Token': token},
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
	function(config) {
		// 在发送请求之前做些什么
		return config;
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
	function(response) {
		// 对响应数据做点什么
		return response.data.result;
	},
	function(error) {
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);

const createAxios = (type) => (url, data = {}, config = {}) => {
	const baseConfig = {
		url,
		method: type,
		...config,
	};
	let params;

	// if (config.headers && config.headers['Content-Type'] && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
	// 使用 ?. （可选链）语法可以简化上面的写法。

	if (config.headers?.['Content-Type'] === 'application/x-www-form-urlencoded') {
		params = qs.stringify(data);
	} else {
		params = data;
	}
	switch (type) {
		case 'get':
			baseConfig.params = params;
			break;
		default:
			baseConfig.data = params;
	}
	return axiosInstance(baseConfig);
};

// 暂时生成 post/get 两种请求方法。
const fetchPost = createAxios('post');
const fetchGet = createAxios('get');

export {fetchGet, fetchPost};
