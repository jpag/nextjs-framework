import React from 'react'
// import Link from 'next/link'

import styles from "../styles/components/footer.styl";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		
		}
	}

	render() { 
		return (
			<footer className={styles.footer} >
				<div className="row headline">
					<div className="col len-10 offset-1">
						<h4>Footer</h4>
					</div>
				</div>
				<div className="row">
					<div className="col len-6 offset-1">
						
					</div>
				</div>
				<div className="row">
					<div className="col len-3 offset-1">
						
					</div>
				</div>


			</footer>
		)
	}
}

export default Footer