import prisma from './client'

interface CreateCard {
  name: string
  hp: number
}

export async function createCard(card: CreateCard) {
    return await prisma.card.create({
        data: card,
    })
}

interface UpdateCard {
  id: number
  name: string
  hp: number
}

export async function updateCard(card: UpdateCard) {
  return await prisma.card.update({
    where: { id: card.id },
    data: card,
  })
}