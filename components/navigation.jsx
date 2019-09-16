import React from 'react'
import Link from 'next/link'

import styles from "../styles/components/nav.styl";

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		
		}
	}

	render() { 
		return (
			<nav className={styles.primary}>
				<div className="home-icon">						
					<Link href="/">
						<a> </a>	
					</Link>
				</div>
				
			</nav>
		)
	}
}

export default Navigation