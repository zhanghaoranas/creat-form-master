module.exports = {
	devServer: {
		port: '8000',
		disableHostCheck: true,
		proxy: {
			'/jeecg-boot': {
				target: 'http://192.168.18.187:8080',
				changeOrigin: true,
			},
		},
	},
};
