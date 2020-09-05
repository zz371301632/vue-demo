<template>
   <div id="mChart"  :style="{width: '100%', height: '500px'}"></div>
</template>

<script>
import {drawLine} from './chart'
	export default {
    created(){  //生命周期里接收参数
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

					tableData.push(pageName)

					tableDataI.push(parseInt(childList[j].fields.up))
				}
				
			  }
			  drawLine(tableData,tableDataI,'流量','流量');
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
    width: 100%;
    height: 500px;
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