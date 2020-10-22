<template>
	<div class="radio_box">
		<van-checkbox-group v-model="elementData.value">
			<van-checkbox
				class="has_margin"
				v-for="item in elementData.options"
				:key="item.id"
				:name="item.id"
				icon-size="16px"
				shape="square"
			>
				{{ item.name }}
			</van-checkbox>
		</van-checkbox-group>
	</div>
</template>

<script>
import formItemMixin from '../mixin/index';
export default {
	name: 'input-checkbox',
	mixins: [formItemMixin],
};
</script>

<style lang="less" scoped>
.radio_box {
	padding: 4px 16px;
	border-bottom: 1px solid #ebedf0;
	font-size: 14px;
}
.has_margin {
	margin: 12px 0;
}
</style>