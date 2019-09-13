import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import ReactGA from 'react-ga'

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
      </>
    )
  }
}

export default MyApp
