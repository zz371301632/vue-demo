<template>
  <div class="schart-box">
    <schart class="schart" canvasId="line" :options="cpu"></schart>
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
				cpu: {
					type: 'line',
					title: {
						text: 'cpu情况'
					},
					bgColor: '#fbfbfb',
					labels: ['ActivityBookShelf', 'UniversalActivity'],
					datasets: [
						{
							label: 'cpu使用率(百分比)',
							data: [2.48,1.21]
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