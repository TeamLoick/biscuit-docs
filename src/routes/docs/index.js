import schema from '../../docs.json';

export const GET = async () => {
	let functions = schema.filter((d) => {		
		if (d.kind === 'function' && d.declarationKind === 'export' && d.name !== 'default' && d.declarationKind !== 'private') {
			return d;
		}
	});

	let classes = schema.filter((d) => {
		if (d.kind === 'class' && d.declarationKind === 'export' && d.name !== 'default' && d.declarationKind !== 'private') {
			return d;
		}
	});

	functions = functions.sort((a, b) => a.name.localeCompare(b.name));
	classes = classes.sort((a, b) => a.name.localeCompare(b.name));
	const docs = [...classes, ...functions];

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: {
			functions,
			classes,
			docs,
		},
	};
};