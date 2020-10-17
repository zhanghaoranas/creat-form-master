<template>
	<div class="upload_file">
		<van-uploader
			v-model="fileList"
			:before-read="beforeRead"
			:max-count="maxCount"
			:after-read="afterRead"
			@delete="handleDelete"
		/>
	</div>
</template>

<script>
import formItemMixin from '../mixin/index';
import {uploadPatrolImage, uploadPatrolVideo} from '../api/index';
export default {
	name: 'upload-file',
	mixins: [formItemMixin],
	data() {
		return {
			fileList: [],
		};
	},
	computed: {
		isMulti() {
			return !(this.elementData.type.indexOf('single') > -1);
		},
		isImg() {
			return this.elementData.type.indexOf('video') > -1;
		},
		maxCount() {
			return this.isMulti ? 3 : 1;
		},
	},
	created() {},
	methods: {
		beforeRead(file) {
			if (this.isImg) {
			} else {
			}
		},
		/**
		 * @description 通过file对象可以自行将文件上传
		 */
		async afterRead(file) {
			file.status = 'uploading';
			file.message = '上传中...';
			let result;
			if (this.isImg) {
				// 进行图片压缩
				result = await uploadPatrolImage({
					uploadFiles: file,
				});
			} else {
				result = await uploadPatrolVideo({
					uploadFiles: file,
				});
			}
			file.status = 'done';
			file.message = '';
			// 多个上传的value为数组，单个上传的为 sting.
			if (this.isMulti) {
				// 图片和视频的返回格式有出入。
				if (this.isImg) {
					this.elementData.value.push(result[0].original);
				} else {
					this.elementData.value.push(result[0]);
				}
				this.fileList = this.elementData.value.map((item) => {
					return {
						url: item,
					};
				});
			} else {
				if (this.isImg) {
					this.elementData.value = result[0].original;
				} else {
					this.elementData.value = result[0];
				}

				this.fileList = [
					{
						url: result[0].original,
					},
				];
			}
		},
		/**
		 * @description 删除文件预览时触发的事件
		 */
		handleDelete({detail}) {
			if (this.isMulti) {
				this.elementData.value.splice(detail, 1);
			} else {
				this.elementData.value = '';
			}
		},
	},
};
</script>

<style lang="less" scoped>
.upload_file {
	padding: 8px 16px 0;
	border-bottom: 1px solid #ebedf0;
}
</style>