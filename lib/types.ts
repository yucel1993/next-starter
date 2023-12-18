export type GraphCar = {
	id: string;
	title: string;
	slug: string;
	featuredImage: {
		node: {
			mediaItemUrl: string;
			sourceUrl?: string;
		};
	};
};
