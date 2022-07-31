build:
	cd biscuit && npx typedoc --plugin typedoc-theme-hierarchy --theme hierarchy --out ../docs --entryPoints packages/core/src/index.ts --entryPoints packages/api-types/src/index.ts --entryPoints packages/cache/src/index.ts --entryPoints packages/rest/src/index.ts --entryPoints packages/ws/src/index.ts && cd ..

update:
	git submodule update --remote --merge