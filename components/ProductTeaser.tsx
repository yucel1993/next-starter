import { GraphCar } from '@/lib/types';
import image from 'next/image';
import Image from 'next/image';

import Link from 'next/link';

export default function ProductTeaser({
	title,
	slug,
	featuredImage,
	id,
}: GraphCar) {
	return (
		<article className="product-teaser">
			{featuredImage.node.mediaItemUrl ? (
				<Link href={`/cars/${slug}`}>
					<h2 style={{ textAlign: 'center' }}>{title}</h2>
					{/* <strong>{title} </strong> */}

					<Image
						width={400}
						height={400}
						className="product-teaser__image"
						sizes="(max-width: 20rem) 90vw,  54rem"
						src={
							featuredImage.node.mediaItemUrl ?? featuredImage.node.sourceUrl
						}
						alt="png"
					/>
				</Link>
			) : (
				<div>
					<h2 style={{ textAlign: 'center' }}>{title}</h2>
					{/* <strong>{title} </strong> */}

					<Image
						width={400}
						height={400}
						className="product-teaser__image"
						sizes="(max-width: 20rem) 90vw,  54rem"
						src={
							featuredImage.node.mediaItemUrl ?? featuredImage.node.sourceUrl
						}
						alt="png"
					/>
				</div>
			)}
		</article>
	);
}
