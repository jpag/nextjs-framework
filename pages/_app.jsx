import React from 'react';
import Router from "next/router"
import App from 'next/app';
import Head from "next/head";

import "../styles/base.styl";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import { logPageView } from '../helpers/tracking.js'
const DefaultJSON = require('../data/defaults.js')

class CustomApp extends App {

  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //   return { pageProps }
  // }
  
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      hidemode: false,
    }
    this.isLoading = this.isLoading.bind(this);
    this.isNotLoading = this.isNotLoading.bind(this);

    this.handleRouteChange = this.handleRouteChange.bind(this);
    this.handleRouteChangeComplete = this.handleRouteChangeComplete.bind(this);
  }

  handleRouteChange(url) {
    this.isLoading();
  }

  handleRouteChangeComplete(url) {
    this.isNotLoading();
    // track page:
    logPageView();
  }

  isNotLoading() {
    this.setLoading(false);
  }
  
  isLoading() {
    this.setLoading(true);
  }

  setLoading(isLoading) {
    this.setState({
      loading: isLoading
    });

  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.handleRouteChange)
    Router.events.on('routeChangeComplete', this.handleRouteChangeComplete)

    // first time log:
    // logPageView();

    // on the first time. add a delay.
    // if the page loads too fast you may want to add a delay before enabling "loaded" for the first time.
    // this will ensure a reveal animation aligns correctly depending on how you setup your classes.
    setTimeout( this.isNotLoading, 0);
  }

  componentWillUnMount() {
    Router.events.off('routeChangeStart', this.handleRouteChange)
    Router.events.off('routeChangeComplete', this.handleRouteChangeComplete)
  }

  render() {
    const { Component, pageProps } = this.props
    const { loading, hidemode } = this.state;
    
    return (
      <div className={`app-wrapper ${ (loading)?`loading`:`loaded`} ${ (hidemode)? `hide-mode`:``} `} >
        <Head>
          <title>{DefaultJSON.title}</title>
          <meta name="description" content={DefaultJSON.meta.description} />
          <meta name="keywords" content={DefaultJSON.meta.keywords} />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>

        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </div>
    )
  }
}

export default CustomApp