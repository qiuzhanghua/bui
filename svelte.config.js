import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { searchForWorkspaceRoot } from 'vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			server: {
				fs: {
					allow: [
						// search up for workspace root
						searchForWorkspaceRoot(process.cwd())
						// your custom rules
						// '/path/to/custom/allow'
					]
				}
			},
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		}
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	]
};

export default config;
