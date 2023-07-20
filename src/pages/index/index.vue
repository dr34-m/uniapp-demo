<template>
	<view class="mainContent">
		<topTitle></topTitle>
		<centerMov></centerMov>
		<page0></page0>
		<page1></page1>
		<page2></page2>
		<view style="height: 200rpx;"></view>
	</view>
</template>

<script>
	import {
		getHitokoto
	} from '@/api/api.js';
	import topTitle from '@/pages/components/topTitle.vue';
	import centerMov from '@/pages/components/centerMov.vue';
	import page0 from '@/pages/components/page0.vue';
	import page1 from '@/pages/components/page1.vue';
	import page2 from '@/pages/components/page2.vue';
	export default {
		components: {
			topTitle,
			centerMov,
			page0,
			page1,
			page2
		},
		data() {
			return {
				src: require('@/static/logo.png'),
			}
		},
		onLoad() {
			// this.getData();
		},
		methods: {
			getData() {
				this.tmp = this.vuex_tmp;
				this.$u.vuex('vuex_tmp', "修改后全局动态响应");
				getHitokoto().then(res => {
					console.log('res', res)
					this.hitokoto = res.hitokoto;
				}).catch(err => {
					console.log('err', err)
				})
			}
		}
	}
</script>

<style lang="scss">
	.mainContent {
		background-color: #4b352b;
		font-size: 27rpx;
		color: #d5c6c2;
		line-height: 45rpx;
		width: 750rpx;
		height: 100%;
		overflow: hidden;
	}
</style>
