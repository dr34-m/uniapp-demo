<template>
	<view class="page0">
		<pHeng size="24" style="margin-top: 96rpx;"></pHeng>
		<view class="img0 photoBorder"></view>
	</view>
</template>

<script>
	import pHeng from '@/pages/components/pHeng.vue';
	export default {
		components: {
			pHeng
		},
		name: 'page0',
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.page0 {
		.img0 {
			width: 594rpx;
			height: 831rpx;
			margin: 77rpx;
		}
	}
</style>