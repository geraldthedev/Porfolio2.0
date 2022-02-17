import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gerald the Dev</title>
        <meta name="description" content="Gerald Bryant's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <header className={styles.banner}>
      <div className={styles.overlay}></div>

    </header>
      
    </div>
  )
}
