import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from './id.module.css'

const Id = () => {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setTitle('test')
      setImg('https://hongxh.cn/img/study_img/http.jpg')
    })
  }, [])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <img width="100" src={img} alt="http" />
        <div className={styles.test}>test</div>
      </div>
    </>
  )
}

export default Id
