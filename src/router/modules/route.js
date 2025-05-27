import Layout from '@/layout'

/**
 * 自定义的路由，用于不需要在左侧菜单栏显示的场景
 *
 */
export const businessRouter = {
  path: '/route',
  component: Layout,
  name: 'route',
  hidden: true,
  children: [
  ]
}

/**
  * 动态路由，通过菜单生成路由
  *  ListRecord: {
  *      component: () => import('@/views/list-record/index')
  *    }
 */
const dynamicRouter = {

}

export default dynamicRouter
