import "../styles/base.styl";
import "../styles/pages/styleguide.styl";


function Styleguide() {
  return <div>
	<article>
		<div className='row'>
			<div className="col len-2"></div>
			<div className="col len-8">

				<h1 className='page-title'>
					Styleguide  
					<span className="breakpoint-mobile">Mobile</span>
					<span className="breakpoint-tablet">Tablet</span>
					<span className="breakpoint-desktop">Desktop</span>
				</h1>
				
				<h1>Header 1</h1>
				<h2>Header 2</h2>
				<h3>Header 3</h3>
				<h4>Header 3</h4>
				<p>article paragraph block</p>
			</div>
			<div className="col len-2"></div>
		</div>
		
	</article>
  </div>
}

export default Styleguide