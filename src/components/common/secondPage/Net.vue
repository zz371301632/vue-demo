<template>
  <div class="schart-box">
    <schart class="schart" canvasId="line" :options="net"></schart>
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
				net: {
					type: 'line',
					title: {
						text: '网络资源消耗'
					},
					bgColor: '#fbfbfb',
					labels: ['WelcomeActivity', 'ActivityBookShelf'],
					datasets: [
						{
							label: '请求个数',
							data: [11,17]
						},
						{
							label: '总流量(kb)',
							data: [0.05,1.48]
						}
					 
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