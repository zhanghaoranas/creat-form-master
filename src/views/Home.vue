<template>
	<section>
		<van-nav-bar
			:title="title"
			right-text="按钮"
			fixed
			placeholder
			@click-left="handleClickLeft"
			@click-right="handleClickRight"
		>
			<template #right>
				<van-button type="primary" size="mini"> 保存 </van-button>
			</template>
		</van-nav-bar>
		<div>
			<input-main v-for="(element, index) in baseInfo.elements" :key="index" :elementData="element"></input-main>
		</div>
		<van-tabs sticky offset-top="46">
			<van-tab v-for="item in checkGroup" :key="item.group_id" :title="item.group_name">
				<div v-for="component in item.components" :key="component.component_id" class="check_item">
					<h5>{{ component.component_name }}</h5>
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
import {getComponentsTypeApi, addPatrolRecord, getPatrolRecord, updatePatrolRecord} from '../api/index';
import {formatTime} from '../utils';
import FormItem from '../components/FormItem.vue';
import InputMain from '../components/InputMain.vue';
export default {
	name: 'home',
	components: {
		FormItem,
		InputMain,
	},
	data() {
		return {
			id: '1318093163238662145',
			title: '填写巡检报告',
			baseInfo: {},
			checkGroup: [],
			otherInfo: {
				category_code: '',
				template_version: 1,
				start_time: '',
				latitude: '',
				longitude: '',
				id: '1318093163238662145',
			},
		};
	},
	created() {
		this.getOtherInfo();

		if (this.otherInfo.id) {
			this.getPreviewData();
		} else {
			this.getComponentsTypeData();
		}
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
			if (!this.otherInfo.id) {
				const {latitude, longitude} = await this.getLocation();
				this.otherInfo.start_time = formatTime(new Date());
				this.otherInfo.latitude = latitude;
				this.otherInfo.longitude = longitude;
			}
			const params = {
				...this.otherInfo,
				data: {
					base_info: this.baseInfo,
					check_group: this.checkGroup,
				},
			};
			if (this.otherInfo.id) {
				await updatePatrolRecord(params);
			} else {
				await addPatrolRecord(params);
			}
		},

		/**
		 * @description
		 */
		getOtherInfo() {
			this.otherInfo.category_code = 'PC200-5000';
			this.otherInfo.template_version = 1;
		},
		/**
		 * @description 获取组件
		 */
		async getComponentsTypeData() {
			const {data} = await getComponentsTypeApi({
				categoryCode: this.otherInfo.category_code,
				template_version: this.otherInfo.template_version,
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
		/**
		 * @description 通过url中获取baseInfo.
		 */
		setBaseinfo() {},
		/**
		 * @description 点击提交时需要获取当前定位
		 */
		getLocation() {
			return new Promise((resolve, reject) => {
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
		/**
		 * @description 获取要修改的数据
		 */
		async getPreviewData() {
			const {category_code, id, latitude, longitude, start_time, template_version, data} = await getPatrolRecord({
				id: this.id,
			});
			this.otherInfo = {
				category_code,
				id,
				latitude,
				longitude,
				start_time,
				template_version,
			};
			this.baseInfo = data.base_info;
			this.checkGroup = data.check_group;
		},
	},
};
</script>

<style lang="less" scoped>
.check_item {
	background-color: #fff;
	margin-top: 6px;
	> h5 {
		margin: 0;
		padding: 9px 16px;
		border-bottom: 1px solid #ebedf0;
	}
}
</style>