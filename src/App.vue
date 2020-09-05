<template>
  <div id="app">	
	<el-container>
  <el-header>
  <vHead></vHead>
  </el-header>
  <el-container>
    <el-aside width="200px">
	<Left></Left>
	</el-aside>
    <el-main>  
	<router-view>
			</router-view>
	</el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
import Left from './components/common/Left.vue'  
import vHead from './components/common/Header.vue';
export default {   
        components: {Left,vHead}
    }  
</script>

<style scoped>
@import "./assets/css/chart.css";
  .el-header, .el-footer {
	background-color: #232C42;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #324157;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;

  }
</style>
