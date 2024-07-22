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
    const guests = await prisma.guest.findMany({
      orderBy: {
        date: 'desc'
      }
    })
    return guests
  } catch (error) {
    console.error('Error fetching guests:', error)
  } finally {
    await prisma.$disconnect()
  }
}

export const deleteGuest = async (id: number) => {
  try {
    await prisma.guest.delete({
      where: {
        id
      }
    })
  } catch (error) {
    console.error('Error deleting guest:', error)
  } finally {
    await prisma.$disconnect()
  }
}

export const updateGuest = async (id: number, data: Guest) => {
  const { name, link, isCompleted, date } = data
  try {
    await prisma.guest.update({
      where: {
        id
      },
      data: {
        name,
        link,
        isCompleted,
        date
      }
    })
  } catch (error) {
    console.error('Error updating guest:', error)
  } finally {
    await prisma.$disconnect()
  }
}
