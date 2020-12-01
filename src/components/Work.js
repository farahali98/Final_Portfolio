import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";


const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
	
];

const Work = () => {
	return (
        // <section className="w-11/12 mx-auto h-screen bg-service bg-center bg-cover bg-fixed">
        <div className="projects">
			<h1>MY WORK</h1>

			<div className="slider">
				<Carousel breakPoints={breakPoints}>

					<Item><img src="https://picsum.photos/seed/picsum/536/354"></img></Item>
					<Item><img src="https://i.picsum.photos/id/275/200/300.jpg?hmac=cSMNzJnIBeocVhMi8311gzgp4ZylFL2LlsUWtqobTEs"></img></Item>
					<Item><img src="https://picsum.photos/seed/picsum/536/354"></img></Item>
				</Carousel>
			</div>
			<div className="gallery">

				<div className="item">
					<img src="https://picsum.photos/id/1060/536/354?blur=2"/>
					<h2>Designed Identity</h2>
				</div>
				<div className="item">
					<img src="https://picsum.photos/id/870/536/354?grayscale&blur=2"/>
					
					<h2>Designed Website</h2>
				</div>
				<div className="item">
					<img src="https://picsum.photos/id/1060/536/354?blur=2" />
					<h2>Designed logo</h2>
				</div>
				
			</div>
			</div>
		


        		// </section>
	);
};

export default Work;