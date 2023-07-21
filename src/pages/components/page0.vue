<template>
	<view class="page0">
		<pHeng size="24" style="margin-top: 96rpx;"></pHeng>
		<view class="img0 photoBorder"></view>
		<view class="text">
			“I love three things in this world.<br />
			Sun,moon and you.<br />
			Sun for morning,moon for night,<br />
			and you forever”<br /><br />
			浮世三千，吾爱有三<br />
			日月与卿<br />
			日为朝，月为暮<br />
			卿为朝朝暮暮<br />
			...
		</view>
		<view class="linTxt">
			<xBtn lText="新郎" rText="王启航" type="1"></xBtn>
			<view class="circlePhoto photoBorder pt1"></view>
		</view>
		<view class="linTxt">
			<view class="circlePhoto photoBorder pt2"></view>
			<xBtn lText="新娘" rText="姜海兰" type="1"></xBtn>
		</view>
		<view class="text">
			I′m so happy i get to be<br />
			next to you and look at the world<br />
			through your eyes<br /><br />
			我很庆幸能陪在你身边<br />
			通过你的目光看世界<br />
		</view>
		<view class="flim">
			<image :src="flim" class="flimBorder"></image>
		</view>
	</view>
</template>

<script>
	import pHeng from '@/pages/components/utils/pHeng.vue';
	import xBtn from '@/pages/components/utils/xBtn.vue';
	export default {
		components: {
			pHeng,
			xBtn
		},
		name: 'page0',
		data() {
			return {
				flim: require('@/static/flim.png')
			}
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

		.text {
			text-align: center;
			color: #cebdb5;
			margin: 80rpx 0;
		}
		
		.linTxt {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 36rpx 0;
			.circlePhoto {
				width: 260rpx;
				height: 260rpx;
				border-radius: 50%;
			}
			
			.pt1 {
				margin-left: 80rpx;
			}
			
			.pt2 {
				margin-right: 50rpx;
			}
		}
		
		.flim {
			
			.flimBorder {
				width: 670rpx;
				height: 450rpx;
				margin: 0 40rpx;
			}
		}
	}
</style>