import schema from '../../../../docs.json';

export const GET = async ({ params }) => {
	let functions = schema.filter((d) => {
		if (d.kind === 'function' && d.declarationKind === 'export' && d.name !== 'default') {
			return d;
		}
	});

	let classes = schema.filter((d) => {
		if (d.kind === 'class' && d.declarationKind === 'export' && d.name !== 'default') {
			return d;
		}
	});

	let interfaces = schema.filter((d) => {
		if (d.kind === 'interface' && d.declarationKind === 'export' && d.name !== 'default') {
			return d;
		}
	});

	functions = functions.sort((a, b) => a.name.localeCompare(b.name));
	classes = classes.sort((a, b) => a.name.localeCompare(b.name));
	interfaces = interfaces.sort((a, b) => a.name.localeCompare(b.name));
	const docs = [...classes, ...functions, ...interfaces];

	let content = schema.find(
		(d) => d.kind == params.type && d.name == params.name
	);

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: {
			functions,
			classes,
			interfaces,
			docs,

			content: content,
			type: params.type
		},
	};
};
