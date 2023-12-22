'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';

const DemoCarousel = () => {
	return (
		<div id="demo-carousel-container">
			<div className="demo-carousel-container-text-container">
				<div className="demo-carousel-container-text-container-div">
					<Carousel width="70%" autoPlay infiniteLoop showThumbs={false}>
						<div className="demo-carousel-container-div">
							<Image
								className="image-corousel"
								sizes="(max-width: 20rem) 90vw,  54rem"
								width={500}
								height={500}
								src="/img/polo.jpeg"
								alt="Slide 1"
							/>
							<p className="legend">VW</p>
						</div>
						<div>
							<Image
								className="image-corousel"
								sizes="(max-width: 20rem) 90vw,  54rem"
								width={500}
								height={500}
								src="/img/bmw.jpeg"
								alt="Slide 2"
							/>
							<p className="legend">BMV</p>
						</div>
						<div>
							<Image
								className="image-corousel"
								sizes="(max-width: 20rem) 90vw,  54rem"
								width={500}
								height={500}
								src="/img/tesla.jpeg"
								alt="Slide 3"
							/>
							<p className="legend">Tesla</p>
						</div>
					</Carousel>
				</div>

				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo esse
					labore omnis ipsam pariatur harum veritatis sit error quaerat?
				</p>
			</div>

			<Link href="/cars">
				<button className="home-button">
					<h4>Our Cars</h4>
				</button>
			</Link>
		</div>
	);
};

export default DemoCarousel;
