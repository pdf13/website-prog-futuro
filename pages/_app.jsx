import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import ReactGA from 'react-ga'
import '../styles/index.css'

class MyApp extends App {
  componentDidMount () {
    ReactGA.initialize('UA-147908050-1')
    ReactGA.pageview(window.location.pathname + window.location.search)

    Router.events.on('routeChangeComplete', () => {
      ReactGA.pageview(window.location.pathname + window.location.search)
    })
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Programadores do amanhã</title>
          <link href='https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700' rel='stylesheet' />
        </Head>
        <style jsx global>{`
          body {
            font-family: 'Work Sans', sans-serif;
          }
        `}</style>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
