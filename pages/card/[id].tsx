import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import Router from 'next/router'
import { CardProps } from '../../components/Card'

async function update(id: number): Promise<void> {
  await fetch(`http://localhost:3001/cards/${id}`, {
    method: 'PUT',
  })
  await Router.push('/')
}

async function destroy(id: number): Promise<void> {
  await fetch(`http://localhost:3001/cards/${id}`, {
    method: 'DELETE',
  })
  await Router.push('/')
}

const Card: React.FC<CardProps> = props => {

  return (
    <Layout>
      <div>
        <h2>{props.name}</h2>
        <p>{props.hp} HP</p>
        <button onClick={() => destroy(props.id)}>
          Delete
        </button>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3001/cards/${context.params.id}`)
  const data = await res.json()
  return { props: { ...data } }
}

export default Card
