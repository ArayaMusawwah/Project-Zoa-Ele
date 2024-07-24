import { createWishes } from '~/lib/database/actions/wishes.action'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (event.node.req.method === 'POST') {
    try {
      await createWishes(body)

      return { status: 200, message: 'Wishes created successfully' }
    } catch {
      return { status: 500, message: 'Failed to create wishes' }
    }
  }
  return { status: 405, message: 'Method not allowed' }
})
