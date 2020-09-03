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
					labels: [, ],
					datasets: [
						{
							label: '请求个数',
							data: []
						},
						{
							label: '总流量(kb)',
							data: []
						}
					 
					]
				}
			}},created(){  //生命周期里接收参数
        this.id = this.$route.query.id  //接受参数关键代码
    },
	mounted () {
		this.$axios
		  .get('http://www.maam.work/getNetwork?did='+this.id)
		  .then(response => {
		      var list = response.data.result
			  console.log(list)
			  var tableData = []
			  var tableDataI = []
			  for (var i=0;i<list.length;i++)
			  { 
			    var mpage = list[i].fields.page
			    var pageName = mpage.substring(mpage.lastIndexOf('.')+1,mpage.length)
			    var childList = list[i].list
			
				for (var j=0;j<childList.length;j++)
				{
				    var tmp = tableData[tableData.length-1]
					if(pageName == tmp || tmp == ''){
					  tableData.push('')
					}else{
					  tableData.push(pageName)
					}
					tableDataI.push(parseInt(childList[j].fields.up))
				}
				
			  }
			  this.net.labels = tableData
			
			  var datasets = [{
						label: '请求个数',
						data: tableDataI
						},
						{
							label: '总流量(kb)',
							data: tableDataI
						}]
			  this.net.datasets = datasets
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