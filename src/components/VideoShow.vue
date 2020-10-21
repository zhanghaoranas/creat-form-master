<template>
	<div class="video_show">
		<van-icon v-if="palyed" name="pause-circle" size="40" @click.stop="handlePlayControl" />
		<van-icon v-else name="play-circle" size="40" @click.stop="handlePlayControl" />
		<video ref="curVideo" :src="url"></video>
	</div>
</template>

<script>
/**
 * @description 该组件只是简单的实现了播放暂停功能
 */
export default {
	name: 'video-show',
	props: {
		url: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			palyed: false,
		};
	},
	methods: {
		handlePlayControl() {
			const video = this.$refs.curVideo;
			if (video.paused) {
				this.palyed = true;
				video.play();
			} else {
				this.palyed = false;
				video.pause();
			}
		},
	},
};
</script>

<style lang="less" scoped>
.video_show {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	> video {
		width: 100%;
		max-height: 100%;
		object-fit: contain;
		cursor: grab;
	}
	> .van-icon {
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -20px;
		margin-left: -20px;
		z-index: 1;
	}
}
</style>