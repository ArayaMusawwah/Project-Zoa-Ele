import { useRoute } from 'nuxt/app'
import { getAllGuests } from '~/lib/database/actions/guests.action'

export default defineEventHandler(async (event) => {
  const url = event.node.req.url
  const page = url?.match(/page=(\d+)/)?.[1] || 1

  try {
    const datum = await getAllGuests(Number(page))
    const totalPage = Math.ceil(datum.length / 10)

    return { status: 200, datum, totalPage }
  } catch {
    return { status: 500, message: 'Failed to get wishes' }
  }
})
