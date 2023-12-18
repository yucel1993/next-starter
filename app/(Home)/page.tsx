'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';

const DemoCarousel = () => {
	return (
		<div id="demo-carousel-container">
			<Carousel autoPlay infiniteLoop>
				<div className="demo-carousel-container-div">
					<Image
						className="image-corousel"
						sizes="(max-width: 20rem) 90vw,  54rem"
						width={500}
						height={500}
						src="/img/polo.jpeg"
						alt="Slide 1"
					/>
					<p className="legend">Legend 1</p>
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
					<p className="legend">Legend 2</p>
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
					<p className="legend">Legend 3</p>
				</div>
			</Carousel>

			<Link href="/cars">
				<h2>Check Our Cars</h2>
			</Link>
		</div>
	);
};

export default DemoCarousel;
