import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: (error) => {
				// Handle the HTTP error here
				console.error(error);
			}
		}
	}
};

export default config;
