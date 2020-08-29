<template>
  <div class="schart-box">
    <schart class="schart" canvasId="line" :options="memory"></schart>
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
				memory: {
					type: 'line',
					title: {
						text: '内存占用情况'
					},
					bgColor: '#fbfbfb',
					labels: ['ActivityBookShelf', 'UniversalActivity'],
					datasets: [
						{
							label: '内存使用(MB)',
							data: [130.06,152.51]
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