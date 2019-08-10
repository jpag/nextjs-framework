import React from 'react';
import App, { Container } from 'next/app';
import Head from "next/head";
import { PageTransition } from 'next-page-transitions';
import DefaultJSON from '../data/defaults.json';

class CustomApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        
        <Head>
          <title>{DefaultJSON.title}</title>
          <meta name="description" content={DefaultJSON.meta.description} />
          <meta name="keywords" content={DefaultJSON.meta.keywords} />
        </Head>

        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0px, -10px, 0px);
            transition: opacity 300ms, transform 300ms;
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
          }
          .page-transition-exit {
            transform: translate3d(0px, 0px, 0px);
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transform: translate3d(0px, -10px, 0px);
            transition: opacity 300ms, transform 300ms;
          }
        `}</style>
      </Container>
    )
  }
}

export default CustomApp