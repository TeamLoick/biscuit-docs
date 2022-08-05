build:
	cd biscuit && npx typedoc --plugin typedoc-theme-hierarchy --theme hierarchy --options ../typedoc.json --out ../docs --entryPoints packages/core/src/index.ts --entryPoints packages/api-types/src/index.ts --entryPoints packages/cache/src/index.ts --entryPoints packages/rest/src/index.ts --entryPoints packages/ws/src/index.ts --entryPoints packages/helpers/src/index.ts && cd ..
	echo docs.biscuitjs.com > docs/CNAME

update:
	git submodule update --remote --merge

cname:
	echo "docs.biscuitjs.com" > docs/CNAME