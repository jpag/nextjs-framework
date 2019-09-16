import fetch from 'isomorphic-unfetch'
import React from 'react'
import Head from "next/head";
import Link from 'next/link'

import styles from "../styles/pages/index.styl";


class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	static async getInitialProps ( { query } ) {
	   
	    // query title and contents are not defined in SPA (via. <Link><a></a></Link)
	    const origin = (process.browser) ? window.location.origin : 'http://localhost:3000'
	    const urlRequest = `${origin}/api/articleslist`
	    const res = await fetch(urlRequest)
	    const json = await res.json()
	    return { data: json }
	}

	render() { 

		const path = 'articles'
		const slug = 'demo-title';
		const { data } = this.props;

		return (
			<article className={styles.homepage}>
				<Head></Head>
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
			            </ul>
		            </div>
		        </div>
		        <div className="row">
		         	<div className="col len-8 offset-1">
			            <h4>Dynamic Posts</h4>
			            <ul>
			            	{data.map((value, index) => {
						        return <li key={index}>
						        	<Link 
						        		href={`/${path}/[slug]?slug=${value.slug}`}
										as={`/${path}/${value.slug}`} >
						        		<a>{value.title}</a>
						        	</Link>
						        </li>
						    })}
			            </ul>
		          	</div>
		        </div>
			</article>
		)
	}
}

export default HomePage