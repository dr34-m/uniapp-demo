<template>
	<view>
		{{ hitokoto }}
		{{ tmp }}
		{{ vuex_tmp }}
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
				tmp: null
			}
		},
		onLoad() {
			this.getApi();
		},
		methods: {
			getApi() {
			this.tmp = this.vuex_tmp;
			this.$u.vuex('vuex_tmp', "111");
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

</style>
