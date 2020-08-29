<template>
  <div>
      <el-menu
      default-active="detail"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
	  router>

 <el-menu-item index="0" >
        <i class="el-icon-menu"></i>
        <span slot="title">数据模拟</span>
      </el-menu-item>

      <el-menu-item index="detail">
        <i class="el-icon-setting"></i>
        <span slot="title">健康体检</span>
      </el-menu-item>

      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span slot="title">文件同步</span>
      </el-menu-item>

<el-menu-item index="2" >
        <i class="el-icon-setting"></i>
        <span slot="title">产品管理</span>
      </el-menu-item>

<el-menu-item index="BigFile">
        <i class="el-icon-setting"></i>
        <span slot="title">产品信息</span>
      </el-menu-item>

    </el-menu>
	

  </div>
</template>

<script>
  
import Left from './Left'
	export default { 
		components: Left
	}
	
</script>

<style scoped>

</style>
