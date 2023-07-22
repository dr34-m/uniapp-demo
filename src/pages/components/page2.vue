<template>
	<view class="page2">
		<sLine style="margin: 120rpx 0;"></sLine>
		<view v-html="text.join('<br/><br/>')" class="content"></view>
		<view class="pto"></view>
		<view class="center">
			<pHeng size="18" top="256" margin="60"></pHeng>
			<view class="contentBox">
				<view class="title">
					<view class="to">To</view>
					<view class="ln"></view>
					<view class="you">最亲爱的你们</view>
				</view>
				<view class="letter" v-html="content.join('<br/><br/>')"></view>
				<view class="inv">邀请人：王启航 ♡ 姜海兰</view>
			</view>
		</view>
		<view class="bottom">
			<view class="photoBorder ptoe"></view>
			<view class="foot">W♡J ｜ SAVE THE DATE ｜ 2023 . 8 . 6</view>
		</view>
	</view>
</template>

<script>
	import sLine from '@/pages/components/utils/sLine.vue';
	import pHeng from '@/pages/components/utils/pHeng.vue';
	export default {
		name: 'page2',
		components: {
			sLine,
			pHeng
		},
		data() {
			return {
				text: [
					"相识时<br/>“承蒙相遇 不胜感激”",
					"相爱时<br/>“人间宝藏 有趣有盼”",
					"结婚时<br/>“三生有幸 余生皆是你”"
				],
				content: [
					"一路走来，心中充满了感谢<br/>关爱与照顾，见证和陪伴<br/>我们都铭记于心<br/>在我们无比重要的这天",
					"携同我们的父母<br/>邀请您及家人出席我们的婚礼<br/>分享我们的重要时刻"
				]
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.page2 {
		.content {
			text-align: center;
			margin-bottom: 120rpx;
		}

		.pto {
			width: 580rpx;
			height: 353rpx;
			margin: auto;
			border: 11rpx solid #be926d;
			box-shadow: #e6bca3 0 0 0 13rpx;
		}

		.center {
			min-height: 1200rpx;
			width: 750rpx;
			background-image: url('@/static/l2.png');
			background-size: 645rpx 1110rpx;
			background-repeat: no-repeat;
			background-position: 199rpx 20rpx;
			
			.contentBox {
				margin: 40rpx 60rpx;
				.title {
					display: flex;
					align-items: center;
					font-size: 27rpx;
			
					.to {
						color: rgb(206, 189, 181);
						font-weight: bold;
					}
			
					.ln {
						transform: rotate(50deg);
						width: 2rpx;
						height: 56rpx;
						background-color: rgb(206, 189, 181);
						margin-left: 16rpx;
						margin-right: 18rpx;
						margin-top: 40rpx;
					}
			
					.you {
						color: #FFFFFF;
						font-style: italic;
						margin-top: 80rpx;
					}
				}
				
				.letter {
					text-align: left;
					margin-top: 110rpx;
				}
				
				.inv {
					margin-top: 110rpx;
					text-align: center;
				}
			}
		}

		.bottom {
			margin: auto;
			width: 680rpx;
			border-top: 14rpx solid #e6bca3;
			
			.ptoe {
				height: 428rpx;
			}
			
			.foot {
				text-align: center;
				color: #473529;
				padding: 8rpx 0;
				background-color: #e6bca3;
			}
		}
	}
</style>