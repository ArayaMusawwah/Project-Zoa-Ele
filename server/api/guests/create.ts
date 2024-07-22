import { createGuests } from '~/lib/database/actions/guests.action'

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event)
      await createGuests(body)
      return { status: 200, message: 'Guests created successfully' }
    } catch {
      return { status: 500, message: 'Failed to create Guests' }
    }
  }
  return { status: 405, message: 'Method not allowed' }
})
