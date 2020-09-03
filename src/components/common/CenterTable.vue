<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"        
	  >
				
      <el-table-column
        prop="date"
        label="测试时间"
        width="180">
      </el-table-column>
	  
      <el-table-column
        prop="phoneMode"
        label="手机厂商"
        width="180">
      </el-table-column>
	  
	    <el-table-column
        prop="phoneBrand"
        label="手机型号"
        width="180">
      </el-table-column>
	  
      <el-table-column
        prop="systemVersion"
        label="系统版本">
      </el-table-column>
	  
	   <el-table-column
        prop="appVersion"
        label="App版本">
      </el-table-column>
	  
	   <el-table-column
        prop="dokitVersion"
        label="Dokit版本">
      </el-table-column>
	
	 
	   <el-table-column
        label="操作" >
		   <template slot-scope="scope">
		<i class="el-icon-view" @click='clickHandler(scope.$index)'></i>
		  </template>
      </el-table-column>
	  
 
    </el-table>
	
  </div>
</template>

<script>

function formatDate(date) {
  var date = new Date(date);
  var YY = date.getFullYear() + '-';
  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return YY + MM + DD +" "+hh + mm + ss;
}
  
import CenterTable from './CenterTable'
	export default { 
		components: CenterTable,
		data() {
        return {
          tableData: []
        }
      },
	  methods:{
	   clickHandler:function (id){

	       this.$router.push({
		  path:'SecondTop',
		  query:{
		    id:this.tableData[id].pk
		  }
		 })
	   }
	  },
	   mounted () {
		this.$axios
		  .get('http://www.maam.work/getCheckDataList/')
		  .then(response => {
			  var list = response.data.result
			  for (var i=0;i<list.length;i++)
			  { 
				var tmp = {
					date: formatDate(list[i].fields.time),
					phoneMode: list[i].fields.phoneMode,
					systemVersion: list[i].fields.systemVersion,
					appVersion: list[i].fields.appVersion,
					phoneBrand: list[i].fields.phoneBrand,
					dokitVersion: list[i].fields.dokitVersion,
					pk:list[i].pk
				}
			    this.tableData.push(tmp)
			  }
		  console.log(list)
		  })
		  .catch(function (error) { // 请求失败处理
			console.log(error);
		  });
	}
}
	
</script>

<style scoped>

</style>
