import { getAllWishes } from '~/lib/database/actions/wishes.action'

export default defineEventHandler(async (event) => {
  try {
    const datum = await getAllWishes()

    return { status: 200, datum }
  } catch {
    return { status: 500, message: 'Failed to get wishes' }
  }
})
