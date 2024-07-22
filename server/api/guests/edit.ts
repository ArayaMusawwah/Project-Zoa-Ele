import { updateGuest } from '~/lib/database/actions/guests.action'

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'PATCH') {
    try {
      const body = await readBody(event)
      await updateGuest(body.id, body)
      return { status: 200, message: 'Guests updated successfully' }
    } catch {
      return { status: 500, message: 'Failed to update guests' }
    }
  }
})
