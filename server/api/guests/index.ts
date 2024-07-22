import { getAllGuests } from '~/lib/database/actions/guests.action'

export default defineEventHandler(async () => {
  try {
    const datum = await getAllGuests()
    return { status: 200, datum }
  } catch {
    return { status: 500, message: 'Failed to get wishes' }
  }
})
