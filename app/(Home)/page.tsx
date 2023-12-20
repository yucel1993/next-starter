'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';
// import DemoCarousel2 from '@/components/DemoCaraouse';

const DemoCarousel = () => {
	return (
		<div id="demo-carousel-container">
			<Carousel autoPlay infiniteLoop showThumbs={false}>
				<div className="demo-carousel-container-div">
					<Image
						className="image-corousel"
						sizes="(max-width: 20rem) 90vw,  54rem"
						width={500}
						height={500}
						src="/img/polo.jpeg"
						alt="Slide 1"
					/>
					<p className="legend">Polo</p>
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
					<p className="legend">BMW</p>
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

			<Link href="/cars">
				<h2>Check Our Cars</h2>
			</Link>
			{/* <DemoCarousel2 /> */}
		</div>
	);
};

export default DemoCarousel;
