import "../styles/base.styl";
import "../styles/pages/styleguide.styl";


function Styleguide() {
  return <div>
	<h1 className='page-title'>
		Styleguide  
	</h1>
	<article>
		<div className='row demo row-solo'>
			<div className="col len-12">
				<span className="breakpoint-mobile">Mobile</span>
				<span className="breakpoint-tablet">Tablet</span>
				<span className="breakpoint-desktop">Desktop</span>
			</div>
		</div>


		<div className='row demo row-headline'>
			<div className="col len-12">
				<span>1x12 Columns</span>
			</div>
		</div>

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

		<div className='row demo row-headline'>
			<div className="col len-12">
				<span>8 x 2 x 2</span>
			</div>
		</div>

		<div className='row demo'>
			<div className="col len-8"></div>
			<div className="col len-2"></div>
			<div className="col len-2"></div>
		</div>

		<div className='row demo row-headline'>
			<div className="col len-12">
				<span>2-offset x 8 x 2-offset</span>
			</div>
		</div>

		<div className='row demo'>
			<div className="col len-2 col-offset"></div>
			<div className="col len-8"></div>
			<div className="col len-2 col-offset"></div>
		</div>

		<div className='row demo row-headline'>
			<div className="col len-12">
				<span>3-offset x 6 x 3-offset</span>
			</div>
		</div>

		<div className='row demo'>
			<div className="col len-3 col-offset"></div>
			<div className="col len-6"></div>
			<div className="col len-3 col-offset"></div>
		</div>

		<div className='row demo row-headline'>
			<div className="col len-12">
				<span>6 x 4 x 2</span>
			</div>
		</div>

		<div className='row demo'>
			<div className="col len-6"></div>
			<div className="col len-4"></div>
			<div className="col len-2"></div>
		</div>

		<div className='row demo row-headline'>
			<div className="col len-12">
				<span>4 x 4 x 2 x 2</span>
			</div>
		</div>

		<div className='row demo'>
			<div className="col len-4"></div>
			<div className="col len-4"></div>
			<div className="col len-2"></div>
			<div className="col len-2"></div>
		</div>

		<div className='row demo row-headline'>
			<div className="col len-12">
				<span>6 x 6</span>
			</div>
		</div>

		<div className='row demo'>
			<div className="col len-6"></div>
			<div className="col len-6"></div>
		</div>
		
	</article>
  </div>
}

export default Styleguide