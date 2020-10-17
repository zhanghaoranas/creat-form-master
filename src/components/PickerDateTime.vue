<template>
	<van-cell-group>
		<van-field
			:value="elementData.value"
			:label="elementData.name"
			readonly
			placeholder="请选择时间"
			@click="datePickerShow = true"
		/>
		<van-popup v-model="datePickerShow" position="bottom" :style="{height: '308px'}">
			<van-datetime-picker
				v-model="pickerDate"
				:type="datetimePickerType"
				title="选择完整时间"
				@confirm="handleConfirmDate"
				@cancel="handleCancelDate"
			/>
		</van-popup>
	</van-cell-group>
</template>

<script>
import formItemMixin from '../mixin/index';
import {formatTime} from '../utils';
export default {
	name: 'input-text',
	mixins: [formItemMixin],
	data() {
		return {
			datePickerShow: false,
			pickerDate: null,
		};
	},
	created() {
		if (this.elementData.value) {
			this.pickerDate = new Date(this.elementData.value);
		} else {
			this.pickerDate = new Date();
		}
	},
	computed: {
		datetimePickerType() {
			return this.elementData.type === 'yyyy-MM-dd' ? 'date' : 'datetime';
		},
	},
	methods: {
		handleConfirmDate() {
			console.log(this.pickerDate);
			const formateType = this.datetimePickerType === 'date' ? '{y}-{m}-{d}' : '{y}-{m}-{d} {h}:{i}';
			this.elementData.value = formatTime(this.pickerDate, formateType);
			this.datePickerShow = false;
		},
		handleCancelDate() {
			this.datePickerShow = false;
		},
	},
};
</script>

<style lang="less" scoped>
</style>