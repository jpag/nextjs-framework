import "../styles/base.styl";
import "../styles/pages/styleguide.styl";

function loopThroughColors() {
	var colors = [];

	var colorList = [
		{
			color: 'color-primary-orange',
			col: 2
		},
		{
			color: 'color-primary-blue',
			col: 2
		},
		{
			color: 'color-primary-white',
			col: 2
		},
		{
			color: 'color-secondary-blue',
			col: 1
		},
		{
			color: 'color-secondary-purple',
			col: 1
		},
		{
			color: 'color-secondary-pink',
			col: 1
		},
		{
			color: 'color-secondary-green',
			col: 1
		},
		{
			color: 'color-secondary-green-light',
			col: 1
		},
	]

	for (let c = 0; c < colorList.length; c++) {

		colors.push(<div key={c} className={`col len-${colorList[c].col} colorBlock ${colorList[c].color}`}></div>)
	}

	return colors
}

function Styleguide() {
  return <div>
	<article>
		<div className='row'>
			<div className="col len-6">

				<h1 className='page-title'>
					Styleguide  
					<span className="breakpoint-mobile">Mobile</span>
					<span className="breakpoint-tablet">Tablet</span>
					<span className="breakpoint-desktop">Desktop</span>
				</h1>
			</div>
		</div>

		<div className='row'>
			<div className="col len-8">
				<h3>Colors</h3>
			</div>
		</div>

		<div className='row color-grid'>
			{loopThroughColors()}
		</div>

		<div className='row'>
			<div className="col len-12">
				
				<h1>This is a Dark Headline 1</h1>
				<h2>This is a Dark Headline 2</h2>
				<h3>This is a Dark Headline 3</h3>
				<h4>This is a Dark Headline 4</h4>
				<h5>This is a Dark Headline 5</h5>
				<h6>This is a Dark Headline 6</h6>
				<h7>This is a Dark Headline 7</h7>

				<p>article paragraph block</p>

			</div>
		</div>
		
	</article>
  </div>
}

export default Styleguide