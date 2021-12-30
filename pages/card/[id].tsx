import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import Router from 'next/router'
import { CardProps } from '../../components/Card'
import ApiClient from '../../apiClient'

async function destroy(id: number): Promise<void> {
  ApiClient.destroy(id)
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
  const data = await ApiClient.getCard(context.params.id)
  return { props: { ...data } }
}

export default Card
