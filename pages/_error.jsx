import React from 'react'

import "../styles/pages/error.styl";


class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <main className="error-page">
        <section>
          <div className="row">
            <div className="col len-10">
              <h1>Oh No!</h1>
              <h2>This is not what you were looking for.</h2>
              <h3>Go back to the <a href="/">Home Page</a>?</h3>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Error