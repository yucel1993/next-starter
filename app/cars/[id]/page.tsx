import React from 'react';
import type { Metadata } from 'next';
import { request, gql } from 'graphql-request';
import { GraphCar } from '@/lib/types';
import ProductTeaser from '@/components/ProductTeaser';
const WP_URL = process.env.GRAPQL_BASE!;
type Params = {
	params: {
		id: string;
	};
};
const OneCar = async ({ params }: Params) => {
	// @ts-ignore
	const { post } = await getPostData(params.id);
	// const query = gql`
	// 	{
	// 		posts {
	// 			nodes {
	// 				id
	// 				title
	// 				featuredImage {
	// 					node {
	// 						mediaItemUrl
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `;
	// const response = (await request(WP_URL, query)) as {
	// 	posts: { nodes: GraphCar[] };
	// };
	console.log('post man', post);

	return (
		<main className="oneCar">
			{' '}
			<ProductTeaser {...post} />{' '}
		</main>
	);
};

async function getPostData(slug: string) {
	const query = gql`{
    post(id: "${slug}", idType: SLUG) {
      title
      featuredImage {
        node {
			sourceUrl
        }
      }
    
    }
  }
`;

	const response = (await request(WP_URL, query)) as GraphCar;
	// return { ...data[0], img };

	return response;
}

/* Metadaten dynamisch generieren */

export async function generateMetadata({ params: { id } }: Params) {
	const post = await getPostData(id);

	return {
		title: post.title,
	};
}

export default OneCar;