export function locationUrl(location) {
	let url = 'https://github.com/oasisjs/biscuit/tree/main';

	let filename = location.filename;
	let start = filename.indexOf('/packages/');

	let componentPath = filename.slice(start, filename.length);
	let lineAndCol = `#L${location.line}:${location.col}`;

	return url + componentPath + lineAndCol;
}

export function packageName(location) {
	return location.filename.split('/')[9];
}


export const ParseType = (tsType) => {
	switch (tsType?.kind) {
		case 'typeRef':
			if (tsType.typeRef?.typeParams !== null) {
				return `${tsType.repr}&#60;${tsType.typeRef?.typeParams?.map(tp => ParseType(tp))?.join(', ')}&#62;`;
			}

			return tsType.repr;

		case 'keyword':
			return tsType.keyword;

		case 'intersection':
			return tsType.intersection.map(int => ParseType(int)).join(' & ');

		case 'union':
			return tsType.union.map(int => ParseType(int)).join(' | ');
		
		case 'array':
			return ParseType(tsType.array) + '[]';

		case 'tuple':
			return tsType.repr === '' ? '[]' : '';

		case 'literal':
			return tsType.literal.kind;

		case 'typeLiteral':
			if (tsType.typeLiteral.methods && tsType.typeLiteral.methods.length > 0) {
				return tsType.typeLiteral.methods.map(f => ParseType(f.returnType)).join(', ');
			}

			if (tsType.typeLiteral.properties && tsType.typeLiteral.properties.length > 0) {
				return tsType.typeLiteral.properties.map(p => ParseType(p.tsType)).join(', ');
			}

			return "";

		case 'getter':
		case 'setter':
			return tsType.functionDef?.returnType ? ParseType(tsType.functionDef.returnType) : "";

		case 'identifier':
			return ParseType(tsType.tsType);

		case 'assign':
			return ParseType(tsType.left);

		case 'object':
			return `{ ${tsType.props[0].key}: ${ParseType(tsType.tsType)} }`;

		default:
			return tsType?.repr || "void";
	}
}

export function getTypeWithURL(typeExpression, docs, base) {
	for (let i = 0; i < docs.length; i++) {
		const doc = docs[i];

		if (strictMatch(typeExpression, doc.name)) {
			console.log(typeExpression, doc.name);
			const references = Array.from(typeExpression.matchAll(doc.name));

			for (const j in references) {
				const ref = references[j];
				
				if (ref && ref.length > 0) {
					if (ref[0] === doc.name) {
						const url = `<a class="underline text-yurh-500 hover:text-yurh-600 font-normal" href="${base}/docs/${packageName(doc.location)}/${doc.kind}/${doc.name}">${doc.name}</a>`;
						return typeExpression.replaceAll(doc.name, url);
					}
				}
			}
		}
	}

	return `<span class="text-yurh-500 font-normal">${typeExpression}</span>`;
}

function strictMatch(str, substr) {
	if (typeof str !== 'string' || typeof substr !== 'string') {
		return false
	}

	return str.replaceAll(/[^a-zA-Z0-9]/g, ' ').split(' ').includes(substr);
}