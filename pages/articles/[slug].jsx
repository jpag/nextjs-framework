import fetch from 'isomorphic-unfetch'
import Head from "next/head";
import {Router, withRouter } from 'next/router'
import React from 'react'

import styles from "../../styles/pages/article.styl";

const slugify = require('../../helpers/slugify');

class ArticlePage extends React.Component {

  static async getInitialProps ( { query } ) {
    // if a user lands on this page for the first time:
    if (query.title) {
      // if title is defined the content is already defined. no need to fetch:
      // but add the slug as that was not passed.
      query.slug = slugify(query.title)
      return {data: query}
    }

    
    // query title and contents are not defined in SPA (via. <Link><a></a></Link)
    const origin = (process.browser) ? window.location.origin : 'http://localhost:3000'
    const urlRequest = `${origin}/api/articles/${query.slug}`
    const res = await fetch(urlRequest)
    const json = await res.json()
    
    return { data: json }
  }

  constructor(props) {
    super(props);
    this.state = { 
    
    }
  }

  render() { 
    const {data} = this.props
    
    return (
      <article className={styles.article}>
        <Head>
          <title>{data.title}</title>
          <meta name="description" content={data.description} />
        </Head>
        <div className="row">
          <div className="col len-8 offset-1">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </article>
    )
  }
}

// use router: https://github.com/zeit/next.js/blob/master/errors/url-deprecated.md
export default withRouter(ArticlePage)