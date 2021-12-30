import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import Card, { CardProps } from '../components/Card'
import ApiClient from '../apiClient'

type Props = {
  feed: CardProps[]
}

const Cards : React.FC<Props> = props => {
  return (
    <Layout>
      <div className="page">
        <h1>My Cards</h1>
        <main>
          {props.feed.map(card => (
            <div key={card.id} className="card">
              <Card card={card} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .card {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }
        .card:hover {
          box-shadow: 1px 1px 3px #aaa;
        }
        .card + .card {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await ApiClient.getCards()
  return {
    props: { feed },
  }
}

export default Cards