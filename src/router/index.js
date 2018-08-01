import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import Comp1 from '@/pages/components/Comp1'
import Comp2 from '@/pages/components/Comp2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      beforeEnter: (to, from, next) => {
        // 这个钩子只能用于一级页面
        console.log(`>> 一级路由页面page2 beforeEnter`);
        next();
      },
      children: [
        {
          path: 'comp1',
          component: Comp1
        },
        {
          path: 'comp2',
          component: Comp2
        }
      ]
    }
  ]
})
