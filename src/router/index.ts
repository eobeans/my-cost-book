import {RouterMount, createRouter} from 'uni-simple-router';

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...ROUTES,
    {
      path: '*',
      redirect:(to:any)=>{
        console.log('地址错误！！返回404！！')
        return {
          name:'404'
        }
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  console.log('跳转结束')
})

export {
	router,
	RouterMount
}
