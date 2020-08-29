import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/detail',
			component:resolve => require(['../components/common/CenterTable.vue'], resolve),
            meta: { title: '自述文件' }
        },
		{
            path: '/secondTop',
		    component:resolve => require(['../components/common/SecondTop.vue'], resolve),
            meta: { title: '大文件' },
			children: [
                {
                    path: '/bigfile',
					component:resolve => require(['../components/common/secondPage/BigFile.vue'], resolve),
					meta: { title: '大文件' }
                },
				{
                    path: '/cpu',
					component:resolve => require(['../components/common/secondPage/Cpu.vue'], resolve),
					meta: { title: 'cpu' }
                },
				{
                    path: '/frame',
					component:resolve => require(['../components/common/secondPage/Frame.vue'], resolve),
					meta: { title: '帧率/卡顿' }
                },
				{
                    path: '/memory',
					component:resolve => require(['../components/common/secondPage/Memory.vue'], resolve),
					meta: { title: '内存/内存泄露' }
                },
				{
                    path: '/net',
					component:resolve => require(['../components/common/secondPage/Net.vue'], resolve),
					meta: { title: '网络' }
                },
				{
                    path: '/startupTime',
					component:resolve => require(['../components/common/secondPage/StartupTime.vue'], resolve),
					meta: { title: '页面打开时长' }
                },
				{
                    path: '/start',
					component:resolve => require(['../components/common/secondPage/Start.vue'], resolve),
					meta: { title: '启动时间' }
                },
				{
                    path: '/ui',
					component:resolve => require(['../components/common/secondPage/UI.vue'], resolve),
					meta: { title: 'UI层级' }
                }
			]
        }
    ]
});
