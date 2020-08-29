<template>
  <div class="schart-box">
    <schart class="schart" canvasId="line" :options="startupTime"></schart>
  </div>
</template>

<script>
	import Schart from 'vue-schart';
	export default {
		name: 'basecharts',
		components: {
			Schart
		},
		data() {
			return {
				startupTime: {
					type: 'line',
					title: {
						text: '页面加载耗时'
					},
					bgColor: '#fbfbfb',
					labels: ['WelcomeActivity','ActivityBookShelf', 'UniversalActivity'],
					datasets: [
						{
							label: '加载时间(ms)',
							data: [1086,1099,198]
						},
					 
					]
				}
			}
		}
	};
</script>
 
 
<style scoped>
.schart {
	margin: 0 auto;
    width: 600px;
    height: 400px;
}
.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
</style>