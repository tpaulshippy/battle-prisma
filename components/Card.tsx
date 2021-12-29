import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

export type CardProps = {
  id: number;
  name: string;
  hp: number;
}

const Card: React.FC<{card: CardProps}> = ({ card }) => {
  return (
    <div onClick={() => Router.push('/card/[id]', `/card/${card.id}`)}>
        <h2>{card.name}</h2>
        <small>{card.hp} HP</small>
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  )
}

export default Card