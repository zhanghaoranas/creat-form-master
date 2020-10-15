<template>
	<section>
		<van-nav-bar
			title="标题"
			left-text="返回"
			right-text="按钮"
			left-arrow
			@click-left="handleClickLeft"
			@click-right="handleClickRight"
		>
			<template #right>
				<van-button type="primary" size="mini"> 保存 </van-button>
			</template>
		</van-nav-bar>
		<van-tabs sticky>
			<van-tab v-for="item in checkGroup" :key="item.group_id" :title="item.group_name">
				<div v-for="component in item.components" :key="component.component_id" class="check_item">
					<h4>{{ component.component_name }}</h4>
					<form-item
						v-for="element in component.elements"
						:key="element.id"
						:componentData="element"
					></form-item>
				</div>
			</van-tab>
		</van-tabs>
	</section>
</template>

<script>
import {getComponentsTypeApi, addPatrolRecord} from '../api/index';
import FormItem from '../components/FormItem.vue';
export default {
	name: 'home',
	components: {
		FormItem,
	},
	data() {
		return {
			baseInfo: {},
			checkGroup: [],
		};
	},
	created() {
		// setTimeout(() => {
		this.getComponentsTypeData();
		// },1000)
	},
	methods: {
		/**
		 * @description 点击导航左侧的返回按钮
		 */
		handleClickLeft() {},
		/**
		 * @description 点击导航右侧的保存按钮
		 */
		async handleClickRight() {
			const location = await this.getLocation();
			const params = {
				...location,
			};
			await addPatrolRecord(params);
		},
		/**
		 * @description 获取组件
		 */
		async getComponentsTypeData() {
			const {data} = await getComponentsTypeApi({
				categoryCode: 'PC200',
				template_version: 1,
			});
			this.checkGroup = data.check_group;
			this.baseInfo = data.base_info;
			this.getBaseInfoData();
		},
		/**
		 * @description 获取基础数据
		 */
		getBaseInfoData() {
			this.setBaseinfo();
		},
		setBaseinfo() {},
		/**
		 * @description 点击提交时需要获取当前定位
		 */
		getLocation() {
			return Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					({coords}) => {
						resolve(coords);
					},
					(error) => {
						reject(error);
					},
					{
						enableHighAccuracy: true, // 高精度
					}
				);
			});
		},
	},
};
</script>

<style lang="less" scoped>
.check_item {
	background-color: #fff;
	margin-bottom: 6px;
	> h4 {
		margin: 0;
		padding: 9px 16px;
		border-bottom: 1px solid #ebedf0;
	}
}
</style>