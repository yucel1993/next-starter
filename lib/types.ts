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

export type GraphCarTitle = {
	post: {
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
};
