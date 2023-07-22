<template>
	<view class="end">
		<bTitle title="记忆碎片"></bTitle>
		<view class="entAlbum">
			<u-album :urls="urls" rowCount="5" maxCount="10"></u-album>
		</view>
	</view>
</template>

<script>
	import bTitle from '@/pages/components/utils/bTitle.vue';
	export default {
		name: 'end',
		components: {
			bTitle
		},
		data() {
			return {
				urls: []
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				this.urls = [];
				for (let i = 1; i < 41; i++) {
					let url = this.vuex_url + 'photo/';
					if (i < 10) {
						url = url + '0';
					}
					this.urls.push(url + i + '.jpg');
				}
				console.log(this.urls)
			}
		}
	}
</script>

<style lang="scss">
	.end {
		padding-top: 80rpx;
		.entAlbum {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>