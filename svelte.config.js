import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

let prod = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		prerender: {
			default: true,
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
		}),
		paths: {
			base: prod ? '/biscuit-web' : '',
		},
	},
};

export default config;
