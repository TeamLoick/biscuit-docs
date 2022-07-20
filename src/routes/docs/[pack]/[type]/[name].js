import schema from '../../../../docs.json';

export const GET = async ({ params }) => {
	let functions = schema.filter((d) => {
		if (d.kind === 'function' && d.declarationKind === 'export' && d.name !== 'default') {
			return d;
		}
	});

	let classes = schema.filter((d) => {
		if (d.kind === 'class' && d.declarationKind === 'export' && d.name !== 'default' && d.declarationKind !== 'private') {
			return d;
		}
	});

	let allDocs = [...classes, ...functions];

	let content = schema.find(
		(d) => d.kind == params.type && d.name == params.name
	);

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: {
			functions,
			classes,
			allDocs,

			content: content,
			type: params.type
		},
	};
};
