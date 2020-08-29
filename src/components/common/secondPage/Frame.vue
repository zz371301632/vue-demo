<template>
  <div class="schart-box">
    <schart class="schart" canvasId="line" :options="frame"></schart>
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
            frame: {
                type: 'line',
                title: {
                    text: '卡顿统计'
                },
                bgColor: '#fbfbfb',
                labels: ['ActivityBookShelf', 'UniversalActivity'],
                datasets: [
                    {
                        label: '帧率',
                        data: [58.63,59.67]
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