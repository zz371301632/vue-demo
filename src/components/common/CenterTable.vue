<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
	  >
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="手机型号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="os"
        label="系统版本">
      </el-table-column>
	  <el-table-column
        prop="version"
        label="app版本">
      </el-table-column>
	   <el-table-column
        label="操作" >
		<i class="el-icon-view" @click='clickHandler'></i>
		</i>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  
import CenterTable from './CenterTable'
	export default { 
		components: CenterTable,
		data() {
        return {
		  id:29,
          tableData: []
        }
      },
	  methods:{
	   clickHandler:function (){
	     this.$router.push({
		  path:'SecondTop',
		  query:{
		    id:this.id
		  }
		 })
	   }
	  },
	   mounted () {
		this.$axios
		  .get('http://140.143.18.27/getAllAppInfo/')
		  .then(response => {
			  var list = response.data.result
			  for (var i=0;i<list.length;i++)
			  { 
				var tmp = {
					date: list[i].fields.time,
					name: list[i].fields.deviceName,
					os: list[i].fields.os,
					version: list[i].fields.appVersion,
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
