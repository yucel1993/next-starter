import type { Metadata } from 'next';
import { request, gql } from 'graphql-request';
import React from 'react';
import { GraphCar } from '@/lib/types';
import ProductTeaser from '@/components/ProductTeaser';

const WP_URL = process.env.GRAPQL_BASE!;
const Cars = async () => {
	const query = gql`
		{
			posts {
				nodes {
					id
					title
					slug
					featuredImage {
						node {
							mediaItemUrl
						}
					}
				}
			}
		}
	`;

	const response = (await request(WP_URL, query)) as {
		posts: { nodes: GraphCar[] };
	};
	console.log(response.posts.nodes);
	return (
		<main>
			<h2 style={{ textAlign: 'center' }}>Cars</h2>
			{response.posts.nodes.map((item) => (
				<ProductTeaser key={item.title} {...item} />
			))}
		</main>
	);
};

export default Cars;
