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
					labels: [],
					datasets: [
						{
							label: 'ui层级',
							data: []
						}
					]
				}
			}
		},created(){  //生命周期里接收参数
        this.id = this.$route.query.id  //接受参数关键代码
		},
		mounted () {
		  this.$axios
		  .get('http://www.maam.work/getUiLevel?did='+this.id)
		  .then(response => {
			  var list = response.data.result
			  var tableData = []
			  var tableDataI = []
			  for (var i=0;i<list.length;i++)
			  { 
			    var mpage = list[i].fields.page
			    var pageName = mpage.substring(mpage.lastIndexOf('.')+1,mpage.length)
				tableData.push(pageName)
				tableDataI.push(parseInt(list[i].fields.level))
			  }
			  this.ui.labels = tableData
			  var  datasets = [{
							label: 'ui层级',
							data: tableDataI
			  }]
			  this.ui.datasets = datasets
		  })
		  .catch(function (error) { // 请求失败处理
			console.log(error);
		  });
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