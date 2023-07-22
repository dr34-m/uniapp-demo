<template>
	<view class="page1">
		<sLine style="margin-top: 40rpx;"></sLine>
		<template v-for="(item,index) in chapter">
			<chapter :data="item" :index="index + 1"></chapter>
		</template>
	</view>
</template>

<script>
	import sLine from '@/pages/components/utils/sLine.vue';
	import chapter from '@/pages/components/utils/chapter.vue';
	export default {
		name: 'page1',
		components: {
			sLine,
			chapter
		},
		data() {
			return {
				chapter: [{
					title: "相遇",
					content: "2018/03/25<br/>遇见你是我一切美好的开始<br/>愿望足够幸运可以一直拥有你<br/>你是我义无反顾，不掺任何虚假喜欢上的人",
					ptSmall: '41',
					ptBig: '42',
					ptBottom: '43'
				},{
					title: "相恋",
					content: "2018/03/25<br/>遇见你是我一切美好的开始<br/>愿望足够幸运可以一直拥有你<br/>你是我义无反顾，不掺任何虚假喜欢上的人",
					ptSmall: '41',
					ptBig: '42',
					ptBottom: '43'
				},{
					title: "相伴",
					content: "2018/03/25<br/>遇见你是我一切美好的开始<br/>愿望足够幸运可以一直拥有你<br/>你是我义无反顾，不掺任何虚假喜欢上的人",
					ptSmall: '41',
					ptBig: '42',
					ptBottom: '43'
				}]
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.page1 {
		
	}
</style>