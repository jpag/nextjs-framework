import "../../styles/base.styl";
import Head from "next/head";
import { withRouter } from 'next/router'
import React from 'react'

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    
    }

    const { router } = props
    console.log(router.query)

  }

  render() { 
    const { query } = this.props.router
    
    return (
      <article className="project-item">
        <Head>
          <title>{query.title}</title>
          <meta name="description" content={query.description} />
        </Head>
        <div className="row">
          <div className="col len-4 offset-1">
            <h4>----</h4>
            <h4>{query.title}</h4>
            <p>{query.description}</p>
          </div>
        </div>
      </article>
    )
  }
}

// use router: https://github.com/zeit/next.js/blob/master/errors/url-deprecated.md
export default withRouter(ProjectPage)