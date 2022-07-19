import schema from '../../../../docs.json';

export const GET = async ({ params }) => {
	let functions = schema.filter((d) => d.kind == 'function');
	let classes = schema.filter(
		(d) => d.kind == 'class' && d.name != 'default'
	);

	let content = schema.find(
		(d) => d.kind == params.type && d.name == params.name
	);

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: {
			functions,
			classes,

			content: content,
			type: params.type
		},
	};
};
