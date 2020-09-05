<template>
   <div id="mChart"  :style="{width: '100%', height: '500px'}"></div>
</template>

<script>

	export default {
		created(){  //生命周期里接收参数
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
			  this.drawChar(tableData,tableDataI)
		  })
		  .catch(function (error) { // 请求失败处理
			console.log(error);
		  });
		},methods:{
		    drawChar(xdata,mdata){
			  var echarts = require('echarts');
			  var myChart = echarts.init(document.getElementById('mChart'))
			  myChart.setOption({
			  
					xAxis: {
					
						type: 'category',
						data: xdata
					},
					yAxis: {
						type: 'value'
					},
					series: [{
					   label: {
                show: true,
                },  
						data: mdata,
						type: 'bar'
					}]
				
			})
		}
	}
	}
</script>
 
 
<style scoped>

</style>