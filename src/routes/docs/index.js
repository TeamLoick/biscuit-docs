import schema from '../../docs.json';

export const GET = async () => {
	let functions = schema.filter((d) => d.kind == 'function');
	let classes = schema.filter(
		(d) => d.kind == 'class' && d.name != 'default'
	);

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: {
			functions,
			classes,
		},
	};
};
