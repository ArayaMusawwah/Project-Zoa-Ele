import { DATA } from '~/constant'

export default defineNuxtRouteMiddleware((to, from) => {
  const url = to.fullPath
  const key = DATA.key
  if (url.includes(`?key=${key}`)) {
    return
  }
  return navigateTo('/')
})
