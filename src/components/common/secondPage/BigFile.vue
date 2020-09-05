<template>
<div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="文件名"
        width="180">
      </el-table-column>
      <el-table-column
	    class='fileFont'
        prop="size"
        label="文件大小(MB)"
        width="180">
      </el-table-column>
      <el-table-column
        prop="path"
        label="文件路径">
      </el-table-column>
    </el-table>
	</div>
</template>

<script>
  import BigFile from './BigFile'
  
   export default {
	components: BigFile,
      data() {
        return {
		  id:0,
          tableData: []
        }
      },
	  created(){  //生命周期里接收参数
        this.id = this.$route.query.id  //接受参数关键代码
      },
	  mounted () {
		this.$axios
		  .get('http://www.maam.work/getBigFile?did='+this.id)
		  .then(response => {
			  var list = response.data.result
			  for (var i=0;i<list.length;i++)
			  { 
				var tmp = {
					size: (list[i].fields.fileSize/(1024*1024)).toFixed(2),
					name: list[i].fields.fileName,
					path: list[i].fields.filePath
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
.fileFont{
   color: #ff0000;
}
</style>