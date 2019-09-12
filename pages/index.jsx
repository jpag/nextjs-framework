import React from 'react'
import Head from "next/head";
import Link from 'next/link'

import "../styles/pages/index.styl";

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() { 

		const path = 'articles'
		const slug = 'demo-title';

		return (
			<article className="homepage">
				<Head>
		        </Head>
		        <div className="row">
		          <div className="col len-8 offset-1">
		            <h2>Home page</h2>
		            <ul>
		            	<li>
		            		<Link href="/grid" >
		            			<a>Grid</a>
		            		</Link>
		            	</li>
		            	<li>
		            		<Link href="/styleguide" >
		            			<a>StyleGuide</a>
		            		</Link>
		            	</li>
		            	<li>
		            		<Link 
		            			href={`/${path}/[slug]?slug=${slug}`}
								as={`/${path}/${slug}`}
							>
		            			<a>'Dynamic' Project Item</a>
		            		</Link>
		            		 <span>from api/ using static json listx</span>
		            	</li>
		            </ul>
		          </div>
		        </div>
			</article>
		)
	}
}

export default HomePage