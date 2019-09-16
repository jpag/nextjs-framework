// import "../styles/base.styl";
import styles from "../styles/pages/styleguide.styl";

function loopThroughColors() {
	var colors = [];

	var colorList = [
		{
			color: 'black',
			col: 2
		},
		{
			color: 'gray',
			col: 2
		},
		{
			color: 'white',
			col: 2
		},
		{
			color: 'primary-highlight',
			col: 1
		},
		{
			color: 'secondary-highlight',
			col: 1
		},
		{
			color: 'seafoam-green',
			col: 1
		},
		{
			color: 'tuscany-muted',
			col: 1
		},
		{
			color: 'lavendar-muted',
			col: 1
		},
		{
			color: 'thistle-muted',
			col: 1
		},
	]

	for (let c = 0; c < colorList.length; c++) {

		colors.push(<div key={c} className={`col len-${colorList[c].col} colorBlock color-${colorList[c].color}`}></div>)
	}

	return colors
}

function Styleguide() {
  return <article className={styles.styleguide} >
		<div className='row'>
			<div className="col len-6 offset-1">

				<h1 className='page-title'>
					Styleguide  
					<span className="breakpoint-mobile">Mobile</span>
					<span className="breakpoint-tablet">Tablet</span>
					<span className="breakpoint-desktop">Desktop</span>
				</h1>
			</div>
		</div>

		<div className='row'>
			<div className="col len-8 offset-1">
				<h3>Colors</h3>
			</div>
		</div>

		<div className='row color-grid'>
			{loopThroughColors()}
		</div>

		<div className='row'>
			<div className="col len-10 offset-1">
				<h1>This is a Dark Headline 1</h1>
				<h2>This is a Dark Headline 2</h2>
				<h3>This is a Dark Headline 3</h3>
				<h4>This is a Dark Headline 4</h4>
				<h5>This is a Dark Headline 5</h5>
				<h6>This is a Dark Headline 6</h6>
				
				<p>Article paragraph block of pig latin. Bite the neighbor's bratty kid get my claw stuck in the dog's ear yet try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard make it to the carpet before i vomit mmmmmm have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat. </p>
				<p>Article paragraph block of pig latin. Bite the neighbor's bratty kid get my claw stuck in the dog's ear yet try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard make it to the carpet before i vomit mmmmmm have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat. </p>

			</div>
		</div>
	</article>
}

export default Styleguide