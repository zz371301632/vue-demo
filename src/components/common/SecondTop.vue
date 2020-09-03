<template>
<div >
  <el-radio-group v-model="tabPosition" style="margin-bottom: 40px; width: 95%" @change="clickHandler(tabPosition)">
    <el-radio-button label="start">启动</el-radio-button>
    <el-radio-button label="frame">帧率/卡顿</el-radio-button>
    <el-radio-button label="cpu">cpu</el-radio-button>
	<el-radio-button label="net">网络</el-radio-button>
	<el-radio-button label="ui">UI层级</el-radio-button>
	<el-radio-button label="memory">内存/内存泄露</el-radio-button>
	<el-radio-button label="startupTime">页面打开时长</el-radio-button>
    <el-radio-button label="bigfile" >大文件</el-radio-button>
	<router-view style="margin-top: 20px;">
	</router-view>
  </el-radio-group>
  </div>
</template>

<script>

export default {
    data() {
      return {
        tabPosition: 'start'
      };
    },
	methods: {
		clickHandler(msg){
		  //通过push进行跳转
		  this.$router.push({
			  path:msg,
			  query:{
				id:this.id
			  }
		  })
		}
	},
	created(){  //生命周期里接收参数
        this.id = this.$route.query.id,  //接受参数关键代码
		console.log('id:'+this.id);
		this.$router.push({
		  path:'start',
		  query:{
		    id:this.id
		  }
		})
    }
  };
 </script>
 
 
<style scoped>

</style>