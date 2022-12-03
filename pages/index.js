import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Restaurant</title>
        <meta name="description" content="The Modern Class Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  )
}
