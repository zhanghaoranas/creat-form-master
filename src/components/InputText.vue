<template>
	<van-cell-group>
		<van-field v-model="elementData.value" :type="elementData.type" :label="elementData.name" placeholder="请输入" />
	</van-cell-group>
</template>

<script>
import formItemMixin from '../mixin/index';
export default {
	name: 'input-text',
	mixins: [formItemMixin],
};
</script>

<style lang="less" scoped>
</style>