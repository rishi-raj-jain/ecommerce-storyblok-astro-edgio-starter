import { Router } from '@edgio/core'
import { astroRoutes } from '@edgio/astro'
import { PAGE_CACHE_HANDLER, API_CACHE_HANDLER, IMAGE_CACHE_HANDLER } from './cache'

export default new Router()
  .match('/', PAGE_CACHE_HANDLER)
  .match('/commerce/:path*', PAGE_CACHE_HANDLER)
  .match('/product/:path*', PAGE_CACHE_HANDLER)
  .match('/l0-api/:path*', API_CACHE_HANDLER)
  .match('/l0-opt', IMAGE_CACHE_HANDLER)
  .use(astroRoutes)
