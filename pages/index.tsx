import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home(props: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Welcome to next</div>
      <div>{props.children}</div>
    </div>
  )
}
