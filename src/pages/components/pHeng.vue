<template>
	<view class="pHeng">
		<view class="p1" :style="'width:'+size+'rpx;height:'+size+'rpx;margin-left:'+size+'rpx;'"></view>
		<view class="p2" :style="'width:'+size+'rpx;height:'+size+'rpx;margin-left:'+size+'rpx;'"></view>
		<view class="p3" :style="'width:'+size+'rpx;height:'+size+'rpx;margin-left:'+size+'rpx;'"></view>
	</view>
</template>

<script>
	export default {
		props: ['size'],
		name: 'pHeng',
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.pHeng {
		width: 750rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.p1 {
			background-color: #99785f;
		}
		
		.p2 {
			background-color: #7d5942;
		}
		
		.p3 {
			background-color: #311b11;
		}
	}
</style>