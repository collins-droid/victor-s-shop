import React from 'react';
import './Slide.css';
import Banner from '../../Banner/Banner';

function Slide(props) {
	const { image, total, active, clickFunction, show } = props;
	return (
		<div>
			<Banner show={show} background={image} />

			<div className='dots mt-3'>
				{Array.from(Array(total), (element, index) => (
					<span className={active === index ? 'dot active' : 'dot'} onClick={() => clickFunction(index)} />
				))}
			</div>
			<a class='prev' onClick={() => clickFunction(active - 1)}>
				&#10094;
			</a>
			<a class='next' onClick={() => clickFunction(active + 1)}>
				&#10095;
			</a>
		</div>
	);
}

export default Slide;
