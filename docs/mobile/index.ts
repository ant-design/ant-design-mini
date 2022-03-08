
   
import type { IApi } from '@umijs/types'

export default (api: IApi) => {
  api.modifyRoutes(routes => {
    routes.unshift({
      path: '/mobile',
      component: __dirname + '/mobile.tsx',
    })
    return routes
  })
}