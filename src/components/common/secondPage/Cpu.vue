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
					labels: [],
					datasets: [
						{
							label: 'cpu使用率(百分比)',
							data: []
						},
					 
					]
				}
			}
		},created(){  //生命周期里接收参数
        this.id = this.$route.query.id  //接受参数关键代码
    },
	mounted () {
		this.$axios
		  .get('http://www.maam.work/getCpu/?did='+this.id)
		  .then(response => {
		      var list = response.data.result
			  console.log(list)
			  var tableData = []
			  var tableDataI = []
			  for (var i=0;i<list.length;i++)
			  { 
			    var mpage = list[i].fields.page
			    var pageName = mpage.substring(mpage.lastIndexOf('.')+1,mpage.length)
				var mpagekey = list[i].fields.pagekey
			    var childList = list[i].list
			
				for (var j=0;j<childList.length;j++)
				{
				    var tmp = tableData[tableData.length-1]
					if(pageName == tmp || tmp == ''){
					  tableData.push('')
					}else{
					  tableData.push(pageName)
					}
					tableDataI.push(parseInt(childList[j].fields.value))
				}
				
			  }
			  this.cpu.labels = tableData
			
			  var datasets = [{
						label: 'cpu使用率(百分比)',
						data: tableDataI
			  }]
			  this.cpu.datasets = datasets
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