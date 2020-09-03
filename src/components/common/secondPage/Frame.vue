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
                labels: [],
                datasets: [
                    {
                        label: '帧率',
                        data: [1.1]
                    },
                 
                ]
            }
		}
    },
	created(){  //生命周期里接收参数
        this.id = this.$route.query.id  //接受参数关键代码
    },
	mounted () {
		this.$axios
		  .get('http://www.maam.work/getFps?did='+this.id)
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
					tableData.push(pageName)
					tableDataI.push(parseInt(childList[j].fields.value))
				}
				
			  }
			  this.frame.labels = tableData
			
			  var datasets = [{
						label: '帧率',
						data: tableDataI
			  }]
			  this.frame.datasets = datasets
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