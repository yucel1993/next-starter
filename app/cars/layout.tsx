import Link from 'next/link';
import { ReactNode } from 'react';
import { request, gql } from 'graphql-request';
import { Toaster } from 'sonner';

const WP_URL = process.env.GRAPQL_BASE!;
type Props = {
	children: ReactNode;
};
type Category = {
	node: {
		name: string;
	};
};
export default async function layout({ children }: Props) {
	const query = gql`
		{
			categories {
				edges {
					node {
						name
					}
				}
			}
		}
	`;

	const response = (await request(WP_URL, query)) as {
		categories: { edges: Category[] };
	};

	return (
		<div className="sidebar-layout">
			<Toaster />
			<h2 id="product-categories">Kategorien</h2>

			<aside className="sidebar-layout__sidebar">
				<nav
					className="category-navigation"
					aria-labelledby="product-categories"
				>
					<ul className="capitalize">
						{response.categories.edges.map((item, i) => (
							<li key={i}>
								<button className="category-navigation-button">
									<Link href={`/cars/category/${item.node.name}`}>
										{item.node.name}
									</Link>
								</button>
							</li>
						))}
					</ul>
				</nav>
			</aside>
			<main className="sidebar-layout__main">{children}</main>
		</div>
	);
}
