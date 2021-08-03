import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>DJ Events</title>
        <meta name='description' content='dj events' />
      </Head>

      <h1>Home</h1>
    </Layout>
  )
}