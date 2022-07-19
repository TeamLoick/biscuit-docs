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
