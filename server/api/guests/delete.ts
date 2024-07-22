import { deleteGuest } from '~/lib/database/actions/guests.action'

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'DELETE') {
    try {
      const body = await readBody(event)
      await deleteGuest(body.id)
      return { status: 200, message: 'Guests deleted successfully' }
    } catch {
      return { status: 500, message: 'Failed to delete guests' }
    }
  }
  return { status: 405, message: 'Method not allowed' }
})
