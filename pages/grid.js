import "../styles/base.styl";
import "../styles/pages/styleguide.styl";


function Styleguide() {
  return <div>
	<h1 className='page-title'>
		Styleguide  
		<span className="breakpoint-mobile">Mobile</span>
		<span className="breakpoint-tablet">Tablet</span>
		<span className="breakpoint-desktop">Desktop</span>
	</h1>
	<article>

		<div className='row demo'>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
			<div className="col len-1"></div>
		</div>

		<div className='row demo'>
			<div className="col len-8"></div>
			<div className="col len-2"></div>
			<div className="col len-2"></div>
		</div>

		<div className='row demo'>
			<div className="col len-2 col-offset"></div>
			<div className="col len-8"></div>
			<div className="col len-2 col-offset"></div>
		</div>

		<div className='row demo'>
			<div className="col len-3 col-offset"></div>
			<div className="col len-6"></div>
			<div className="col len-3 col-offset"></div>
		</div>

		<div className='row demo'>
			<div className="col len-6"></div>
			<div className="col len-4"></div>
			<div className="col len-2"></div>
		</div>

		<div className='row demo'>
			<div className="col len-4"></div>
			<div className="col len-4"></div>
			<div className="col len-2"></div>
			<div className="col len-2"></div>
		</div>

		<div className='row demo'>
			<div className="col len-6"></div>
			<div className="col len-6"></div>
		</div>
		
	</article>
  </div>
}

export default Styleguide