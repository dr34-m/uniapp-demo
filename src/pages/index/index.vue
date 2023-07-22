<template>
	<view class="mainContent">
		<topTitle></topTitle>
		<centerMov></centerMov>
		<page0></page0>
		<page1></page1>
		<page2></page2>
		<view id="addr"></view>
		<eAddr></eAddr>
		<eTips></eTips>
		<view class="navBox">
			<view class="msc start" @click="handStop" v-if="vuex_mucFlag"></view>
			<view class="msc stop" @click="handStart" v-else></view>
			<view class="nav" @click="pageTo"></view>
		</view>
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
	import eAddr from '@/pages/components/eAddr.vue';
	import eTips from '@/pages/components/eTips.vue';
	export default {
		components: {
			topTitle,
			centerMov,
			page0,
			page1,
			page2,
			eAddr,
			eTips
		},
		data() {
			return {
				nav: require('@/static/nav.png'),
				innerAudioContext: null
			}
		},
		onLoad() {
			this.innerAudioContext = wx.createInnerAudioContext({
				useWebAudioImplement: false
			});
			this.innerAudioContext.src = this.vuex_url + 'msc/stay.mp3';
		},
		onHide() {
			this.stop();
		},
		onShow() {
			this.start();
		},
		methods: {
			pageTo() {
				uni.pageScrollTo({
					selector: "#addr",
					duration: 300
				});
			},
			handStart() {
				this.$u.vuex('vuex_hangStopFlag', false);
				this.start();
			},
			handStop() {
				this.$u.vuex('vuex_hangStopFlag', true);
				this.stop();
			},
			start() {
				if(!this.vuex_hangStopFlag) {
					this.innerAudioContext.play();
					this.$u.vuex('vuex_mucFlag', true);
				}
			},
			stop() {
				this.innerAudioContext.pause();
				this.$u.vuex('vuex_mucFlag', false);
			}
		}
	}
</script>

<style lang="scss">
	.mainContent {
		background-color: #4b352b;
		font-size: 27rpx;
		color: #d5c6c2;
		line-height: 47rpx;
		width: 750rpx;
		height: 100%;
		overflow: hidden;

		.navBox {
			position: fixed;
			bottom: 60rpx;
			right: 30rpx;

			.msc {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				background-position: center;
				background-size: 90rpx;
			}

			.start {
				background-image: url('@/static/msc.png');
				animation: 3s linear 0s infinite normal none running menurotate;
			}

			@keyframes menurotate {
				0% {
					transform: rotate(0deg);
				}

				100% {
					transform: rotate(360deg);
				}
			}

			.stop {
				background-image: url('@/static/mscs.png');
			}

			.nav {
				width: 80rpx;
				height: 100rpx;
				background-image: url('@/static/nav.png');
				background-position: center;
				background-size: 90rpx;
				background-repeat: no-repeat;
				box-shadow: #7a5138 0 0 6rpx 1rpx;
				background-color: #39b54a;
				border-radius: 10rpx;
				margin-top: 30rpx;
				opacity: .9;
			}
		}


	}
</style>