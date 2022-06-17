<template>
	<view class="main">
		<view class="img">
			<u-image :src="src" width="72px" height="72px"></u-image>
		</view>
		<view>请求数据：{{ hitokoto }}</view>
		<view>页面数据：{{ tmp }}</view>
		<view>数据中心：{{ vuex_tmp }}</view>
		<view>过滤器-性别：{{ sex | sexFilter }}</view>
		<view>过滤器-学历：{{ education | educationFilter }}</view>
	</view>
</template>

<script>
	import {
		getHitokoto
	} from '@/api/api.js';
	export default {
		data() {
			return {
				hitokoto: null,
				tmp: null,
				src: require('@/static/logo.png'),
				sex: 1,
				education: 'cz'
			}
		},
		onLoad() {
			this.getData();
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
	.main {
		
		view {
			margin: 20rpx;
		}
		
		.img {
			display: flex;
			justify-content: center;
		}
	}
</style>
