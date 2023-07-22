<template>
	<view class="end">
		<view v-if="show">
			<u-album :urls="urls" rowCount="5" maxCount="10"></u-album>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'end',
		data() {
			return {
				show: true,
				urls: []
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				this.urls = [];
				for (let i = 1; i < 40; i++) {
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
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30rpx 0;
	}
</style>