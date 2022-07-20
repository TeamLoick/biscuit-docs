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
			if (tsType.typeRef?.typeParams != null) {
				return `${tsType.repr}<${tsType.typeRef.typeParams.map(tp => ParseType(tp)).join(', ')}>`;
			}

			return tsType.repr;

		case 'keyword':
			return tsType.keyword;

		case 'intersection':
			return tsType.intersection.map(int => ParseType(int)).join(' & ');

		case 'union':
			return tsType.union.map(int => ParseType(int)).join(' | ');
		
		case 'array':
			return ParseType(tsType.array);

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

		default:
			return tsType?.repr || "";
	}
}
