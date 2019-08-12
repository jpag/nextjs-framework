import "../styles/base.styl";
import Head from "next/head";
import React from 'react'

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		
		}
	}

	render() { 
		return (
			<article>
				<Head>
		          
		        </Head>

		        <div className="row">
		          <div className="col len-4 offset-1">
		            <h2>Home page</h2>
		            <ul>
		            	<li><a href="/grid">Grid</a></li>
		            	<li><a href="/styleguide">StyleGuide</a></li>
		            	<li><a href="/project/demo-title">'Dynamic' Project Item from .json list</a></li>
		            </ul>

		          </div>
		        </div>
			</article>
		)
	}
}

export default HomePage