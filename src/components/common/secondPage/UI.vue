<template>
  <div class="schart-box">
    <schart class="schart" canvasId="line" :options="ui"></schart>
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
				ui: {
					type: 'line',
					title: {
						text: '页面层级'
					},
					bgColor: '#fbfbfb',
					labels: ['ActivityBookShelf', 'UniversalActivity','UniversalActivity'],
					datasets: [
						{
							label: 'ui层级',
							data: [5,20,7]
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