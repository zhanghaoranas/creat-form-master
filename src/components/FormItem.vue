<template>
	<div>
		<input-text v-if="componentData.type === 'text' || componentData.type === 'number'"></input-text>
		<input-radio v-else-if="componentData.type === 'radio'"></input-radio>
		<input-checkbox v-else-if="componentData.type === 'checkbox'"></input-checkbox>
		<picker-date-time
			v-else-if="componentData.type === 'yyyy-MM-dd' || componentData.type === 'yyyy-MM-dd HH:mm'"
		></picker-date-time>
		<time-meter v-else-if="componentData.type === 'timer'"></time-meter>
		<upload-file v-else></upload-file>
	</div>
</template>

<script>
	// 该组件下的所有子组件公用一个数据，所以使用提供/注入。
	import InputText from './InputText.vue';
	import InputRadio from './InputRadio.vue';
	import InputCheckbox from './InputCheckbox.vue';
	import PickerDateTime from './PickerDateTime.vue';
	import TimeMeter from './TimeMeter.vue';
	import UploadFile from './UploadFile.vue';
	export default {
		name: 'form-item',
		props: {
			componentData: {
				type: Object,
				required: true,
			},
		},
		components: {
			InputText,
			InputRadio,
			InputCheckbox,
			PickerDateTime,
			TimeMeter,
			UploadFile,
		},
		provide: function() {
			return {
				elementData: this.componentData,
			};
		},
	};
</script>

<style lang="less" scoped></style>>
