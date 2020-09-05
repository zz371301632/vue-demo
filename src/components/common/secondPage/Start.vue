<template>
<div >
	<h4 class="titleText">本次启动耗时:</h4>
	<p class="titleTime">{{totleTime}}ms</p>
	
	<p class="titleText" style="font-size:16px">本次启动主流程中函数耗时如下:</p>
	
 <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp">
      {{activity.content}}
	  
	    <p class="timeline-name" ></p>
    </el-timeline-item>
  </el-timeline>
	</div>
</template>


<script>
  export default {
    data() {
      return {
        reverse: true,
        activities: [],
		totleTime:0
      };
    },
	created(){  //生命周期里接收参数
        this.id = this.$route.query.id  //接受参数关键代码
    },
	mounted () {
		this.$axios
		  .get('http://www.maam.work/getAppStart/?did='+this.id)
		  .then(response => {
			  var list = response.data.result
			  this.totleTime = 0
			  console.log(list)
			  for (var i=0;i<list.length;i++)
			  { 
			    var coustDetail = list[i].fields.coustDetail
				coustDetail = coustDetail.substring(coustDetail.lastIndexOf('=')+1,coustDetail.length)
				var tmp = {
					timestamp: list[i].fields.costTime,
					content: coustDetail
				}
			    this.activities.push(tmp)
				this.totleTime += parseInt(list[i].fields.costTime)
			  }
			
		  })
		  .catch(function (error) { // 请求失败处理
			console.log(error);
		  });
	}
  };
</script>
 
 
<style scoped>
.titleText{
	text-align : left;
    font-size: 18px;
    color: #000;
}
.titleTime{
	text-align : left;
    font-size: 22px;
    color: #f00;
}
</style>