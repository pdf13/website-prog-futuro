import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
            integrity='sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS'
            crossOrigin='anonymous'
          />
          <link href='https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700' rel='stylesheet' />
        </Head>
        <style jsx global>{`
          body {
            font-family: 'Work Sans', sans-serif;
          }
        `}</style>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
