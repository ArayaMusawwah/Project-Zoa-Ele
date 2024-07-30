import type { Wish } from '~/types'
import prisma from '..'

export const getAllWishes = async () => {
  try {
    const wishes = await prisma.wishes.findMany()
    return wishes
  } catch (error) {
    console.error('Error fetching wishes:', error)
  } finally {
    await prisma.$disconnect()
  }
}

export const createWishes = async (data: Wish) => {
  const { name, wish, date } = data

  try {
    /* await prisma.wishes.create({
      data: {
        name,
        wish,
        date,
        kehadiran
      }
    }) */

    await prisma.wishes.create({
      data: {
        name,
        wish,
        date
      }
    })
  } catch (error) {
    console.error('Error creating wishes:', error)
  } finally {
    await prisma.$disconnect()
  }
}
