import React from 'react';
import { request, gql } from 'graphql-request';
import { GraphCar } from '@/lib/types';
import ProductTeaser from '@/components/ProductTeaser';

const WP_URL = process.env.GRAPQL_BASE!;
type Props = {
	params: {
		name: string;
	};
};
const page = async ({ params }: Props) => {
	const query = gql`{
        category(id: "${params.name}", idType: NAME) {
          name
          posts {
            nodes {
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `;

	const response = (await request(WP_URL, query)) as {
		category: { posts: { nodes: GraphCar[] } };
	};
	console.log('category carsa', response.category.posts.nodes);
	return (
		<div>
			{response.category.posts.nodes.map((item) => (
				<ProductTeaser key={item.title} {...item} />
			))}
		</div>
	);
};

export default page;
