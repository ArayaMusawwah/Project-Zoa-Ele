import type { Guest } from '~/types'
import prisma from '..'

export const createGuests = async (data: Guest) => {
  const { name, link, isCompleted, date } = data
  try {
    await prisma.guest.create({
      data: {
        name,
        link,
        isCompleted,
        date
      }
    })
  } catch (error) {
    console.error('Error creating guests:', error)
  } finally {
    await prisma.$disconnect()
  }
}

export const getAllGuests = async () => {
  try {
    const guests = await prisma.guest.findMany()
    return guests
  } catch (error) {
    console.error('Error fetching guests:', error)
  } finally {
    await prisma.$disconnect()
  }
}
