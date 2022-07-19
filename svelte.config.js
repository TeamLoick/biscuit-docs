import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

let dev = "production" === "development";

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
			entries: []
		},
        adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
        }),
        paths: {
            base: dev ? "" : "/biscuit-web",
        }
    }
};

export default config;
