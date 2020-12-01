import React from "react";
import Paint from "../paint.svg";
import w from "../www.svg";
import Youtube from "../youtube.svg";
const Services = () => {
	return (
		// <section className="w-11/12 mx-auto h-screen bg-service bg-center bg-cover bg-fixed">
		<div className="h-screen w-full bg-white">

		<div className="container">
			<div className="services-left">
					<h1>Services</h1>
					<p>This is an introduction about our services. 
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
					</p>
					 <button type="button" className="S-btn btn-primary">Hire Me</button>
				

			</div>
			<div className="services-right">
				<div className="first-column">
						<div className='service'>
							<img src={w} alt="icon" className="ServiceIcon"/>
						<h2>Web Design</h2>
						<article>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </article>
					</div>
						<div className='service'>
							<img src={Paint} alt="icon" className="ServiceIcon"/>
					<h2>Social Media </h2>
				<article>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </article>
					</div>
					
				</div>

				<div className="second-column">
						<div className='service'>
							<img src={Paint} alt="icon" className="ServiceIcon"/>
					<h2>Identity Branding </h2>
						<article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </article>
					</div>
						<div className='service'>
							<img src={Youtube} alt="icon" className="ServiceIcon"/>
					<h2>Logo Design</h2>
						<article>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </article>
					</div>
					
				</div>

			</div>


		</div>

		</div>
		// </section>
	);
};

export default Services;
