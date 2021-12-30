import prisma from './client'
import { createCard, updateCard } from './functions'
import cors from 'cors'
import express from 'express'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/cards', async (req, res) => {
  const cards = await prisma.card.findMany({
  })
  res.json(cards)
})

app.post(`/cards`, async (req, res) => {
  const { name, hp } = req.body
  const result = await createCard({
      name,
      hp: parseInt(hp),
  })
  res.json(result)
})

app.delete(`/cards/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.card.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get(`/cards/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.card.findUnique({
    where: {
      id: Number(id),
    }
  })
  res.json(post)
})

app.put('/cards/:id', async (req, res) => {
  const { id } = req.params
  const { name, hp } = req.body
  const post = await updateCard({ 
      id: parseInt(id),
      name,
      hp, 
  })
  res.json(post)
})


const server = app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)