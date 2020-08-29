<template>
<div >
	<h4 class="titleText">本次启动耗时:</h4>
	<p class="titleTime">992.00 ms</p>
	
	<p class="titleText" style="font-size:16px">本次启动主流程中函数耗时如下:</p>
	
 <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: 'com.zhangyue.iReader.app.IreaderApplication&attachBaseContext',
          timestamp: '187ms'
        }, {
          content: 'com.zhangyue.iReader.hotfix.HotfixManager&init',
          timestamp: '25ms'
        }, {
          content: 'com.zhangyue.iReader.hotfix.HotfixManager&loadHotfixPluginClassLoader',
          timestamp: '24ms'
        }, {
          content: 'com.zhangyue.iReader.hotfix.HotfixManager&readInstalledHotfix',
          timestamp: '24ms'
        }, {
          content: 'com.zhangyue.iReader.hotfix.HotfixManager&loadHotfixPluginClassLoader',
          timestamp: '23ms'
        }, {
          content: 'com.zhangyue.iReader.app.AppContext&onApplicationAttachBaseContext',
          timestamp: '158ms'
        }, {
          content: 'com.zhangyue.iReader.crashcollect.CrashHandler&init',
          timestamp: '7ms'
        }, {
          content: 'com.zhangyue.iReader.plugin.PluginManager&init',
          timestamp: '147ms'
        }]
      };
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