import {  } from '../src/client'
import { createCard } from '../src/functions'
import { prismaMock } from './../src/singleton'

test('should create new card ', async () => {
  const card = {
    id: 1,
    name: 'Test',
    hp: 100,
  }

  prismaMock.card.create.mockResolvedValue(card)

  await expect(createCard(card)).resolves.toEqual({
    id: 1,
    name: 'Test',
    hp: 100,
  })
})
