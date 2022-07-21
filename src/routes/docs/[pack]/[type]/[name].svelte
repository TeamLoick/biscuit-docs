<script>
	import { packageName, locationUrl, ParseType, getTypeWithURL } from '$root/utils/docs';
	import { base } from '$app/paths';

	export let functions = [];
	export let classes = [];
	export let docs = [];

	export let content = [];
	export let type = [];

	import { browser } from '$app/env';

	if (browser) {
		let hash = window.location.hash;

		if (hash && !hash.includes('#!')) {
			let target = document.querySelector(hash);

			if (target !== null) {
				target.scrollIntoView({
					behavior: 'smooth',
				});
			}
		}
	}
</script>

<head>
	<title> Documentation - Biscuit</title>
</head>

<div class="hidden lg:relative lg:block lg:flex-none">
	<div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />

	<div
		class="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5"
	>
		<div
			class="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"
		/>
		<div
			class="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"
		/>

		<nav class="text-base lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16">
			<ul class="space-y-9">
				<li>
					<details open>
						<summary class="list-none w-full cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" class="closed-icon h-4 w-4 hover:" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							  </svg>
							  <svg xmlns="http://www.w3.org/2000/svg" class="open-icon h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
							  </svg>
							<h2
								class="font-display font-medium text-slate-900 dark:text-white"
							>
								General
							</h2>
						</summary>

						<ul
							class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
						>
							<li class="relative">
								<a
									class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
									href={`${base}/docs`}
								>
									Introduction
								</a>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<details open>
						<summary class="list-none w-full cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" class="closed-icon h-4 w-4 hover:" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							  </svg>
							  <svg xmlns="http://www.w3.org/2000/svg" class="open-icon h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
							  </svg>
							<h2
								class="font-display font-medium text-slate-900 dark:text-white"
							>
								Functions
							</h2>
						</summary>

						<ul
							class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
						>
							{#each functions as f}
								{@const pack = packageName(f.location)}

								{#if content.name == f.name}
									<li class="relative">
										<span
											class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-nova-500 before:bg-nova-500"
										>
											{f.name}
										</span>
									</li>
								{:else}
									<li class="relative">
										<a
											class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
											href={`${base}/docs/${pack}/function/${f.name}`}
										>
											{f.name}
										</a>
									</li>
								{/if}
							{/each}
						</ul>
					</details>
				</li>

				<li>
					<details open>
						<summary class="list-none w-full cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" class="closed-icon h-4 w-4 hover:" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							  </svg>
							  <svg xmlns="http://www.w3.org/2000/svg" class="open-icon h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
							  </svg>
							<h2
								class="font-display font-medium text-slate-900 dark:text-white"
							>
								Classes
							</h2>
						</summary>

						<ul
							class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
						>
							{#each classes as c}
								{@const pack = packageName(c.location)}

								{#if content.name == c.name}
									<li class="relative">
										<span
											class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-nova-500 before:bg-nova-500"
										>
											{c.name}
										</span>
									</li>
								{:else}
									<li class="relative">
										<a
											class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
											href={`${base}/docs/${pack}/class/${c.name}`}
										>
											{c.name}
										</a>
									</li>
								{/if}
							{/each}
						</ul>
					</details>
				</li>
			</ul>
		</nav>
	</div>
</div>

<div
	class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16"
>
	<article>
		<header class="mb-9 space-y-1">
			<p class="font-display text-sm font-medium text-nova-600">
				{type}
			</p>
			<h1
				class="font-display text-3xl tracking-tight text-slate-900 dark:text-white"
			>
				{content.name}
			</h1>

			{#if content.jsDoc}
				{@const doc = content.jsDoc?.doc}

				{#if doc}
					<p class="mt-2 text-slate-500 dark:text-slate-400">{doc}</p>
				{/if}

				<!-- tags -->
			{/if}
		</header>

		<span class="h-3.5 w-px bg-nova-600/20">
			<a
				class="m-2 text-base font-medium tracking-tight"
				href={locationUrl(content.location)}>Github</a
			>
		</span>

		<div>
			{#if content.classDef}
				{@const properties = content.classDef.properties}
				{@const methods = content.classDef.methods}

				<div
					class="flex relative z-20 prose prose-slate mt-12 dark:prose-dark"
				>
					<ul class="text-base lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16">
						<li class="mb-2">
							<span
								class="font-display font-medium text-slate-900 dark:text-white"
								>Properties</span
							>
						</li>

						{#each properties as property}
							<li>
								<a
									class="py-2 pr-2 font-mono font-medium text-xs leading-6 text-gray-500 whitespace-nowrap"
									href={`#${property.name}`}
									>{property.name}</a
								>
							</li>
						{/each}
					</ul>

					<ul
						class="text-base lg:text-sm w-64 pr-11 xl:w-96 xl:pr-12"
					>
						<li class="mb-2">
							<span
								class="font-display font-medium text-slate-900 dark:text-white"
								>Methods</span
							>
						</li>

						{#each methods as method}
							<li class="w-full">
								<span
									class="text-nova-500 no-underline text-xs leading-6 pr-2 py-2 font-mono"
									>{method.kind === 'setter'
										? '[set]'
										: ''}{method.kind === 'getter'
										? '[get]'
										: ''}</span
								>
								<a
									class="py-2 pr-2 font-mono font-medium text-xs leading-6 text-gray-500 whitespace-nowrap"
									href={`#${method.name}`}
								>
									{method.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<div
					class="relative z-20 prose prose-slate mt-12 dark:prose-dark"
				>
					<span class="mt-6 text-lg tracking-tight text-slate-700"
						>Properties</span
					>

					<div
						class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100"
					>
						{#each properties as property}
							<article id={property.name} class="py-10 sm:py-12">
								<div
									class="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0"
								>
									<div class="flex flex-col items-start">
										<div class="flex space-x-2">
											{#if property.readonly}
												<span
													class="font-mono text-sm leading-7 text-nova-500"
													>[readonly]</span
												>
											{/if}

											{#if property.optional}
												<span
													class="font-mono text-sm leading-7 text-nova-500"
													>[optional]</span
												>
											{/if}
										</div>

										<h2
											class="mt-2 text-lg font-normal text-slate-900"
										>
											<!-- svelte-ignore a11y-invalid-attribute -->
											<a class="text-nova-600 font-mono text-xs no-underline" href="#">{content.name}.</a><a class="no-underline" href={`#${property.name}`}>
												{property.name}</a>:
											<span class="text-lg text-yurh-600">
												{#if property.tsType}
													{@html getTypeWithURL(ParseType(property.tsType), docs, base)}
												{/if}
											</span>
										</h2>
									</div>
									<div class="mt-4 flex items-center gap-4">
										<span
											aria-hidden="true"
											class="text-sm font-bold text-slate-400"
											>/</span
										>

										<a
											class="flex items-center text-sm font-bold leading-6 text-nova-500 hover:text-nova-600 active:text-nova-700"
											aria-label="Show notes for episode 2: Hank Scorpio"
											href={locationUrl(
												property.location
											)}
											>Github
										</a>
									</div>
									<div
										class="mt-2 text-lg text-justify flex items-center gap-4"
									>
										{property.jsDoc?.doc
											? property.jsDoc?.doc
											: ''}
									</div>
								</div>
							</article>
						{/each}
					</div>
				</div>

				<div
					class="relative z-20 prose prose-slate mt-12 dark:prose-dark"
				>
					<span class="mt-6 text-lg tracking-tight text-slate-700"
						>Methods</span
					>

					<div
						class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100"
					>
						{#each methods as method}
							<article id={method.name} class="py-10 sm:py-12">
								<div
									class="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0"
								>
									<div class="flex flex-col items-start">
										<div class="flex space-x-2">
											{#if method.optional}
												<span
													class="font-mono text-sm leading-7 text-nova-500"
													>[optional]</span
												>
											{/if}
										</div>

										<h2
											class="mt-2 text-lg text-slate-900 font-normal"
										>
											<span
												class="text-nova-500 no-underline text-xs leading-6 pr-2 py-2 font-mono"
												>{method.kind === 'setter'
													? '[set]'
													: ''}{method.kind ===
												'getter'
													? '[get]'
													: ''}</span>
											<!-- svelte-ignore a11y-invalid-attribute -->
											<a href="#" class="no-underline text-yurh-600 hover:text-yurh-700 font-mono text-xs font-normal">{content.name}.</a><a class="no-underline font-normal" href={`#${method.name}`}
												>
												{method.name}<span>({@html method.functionDef.params && method.functionDef.params.length > 0 
												? method.functionDef.params.map(p => getTypeWithURL(ParseType(p), docs, base)).join(', ') 
												: ''})</span></a
											>:
											<span class="text-lg text-yurh-600 font-normal">
												{@html method.functionDef && method.functionDef?.returnType
													? getTypeWithURL(ParseType(method.functionDef.returnType), docs, base)
													: ''}
											</span>
										</h2>
									</div>
								</div>

								<div class="mt-4 flex items-center gap-4">
									<span
										aria-hidden="true"
										class="text-sm font-bold text-slate-400"
										>/</span
									>

									<a
										class="flex items-center text-sm font-bold leading-6 text-nova-500 hover:text-nova-600 active:text-nova-700"
										aria-label="Show notes for episode 2: Hank Scorpio"
										href={locationUrl(method.location)}
										>Github
									</a>
								</div>

								<div
									class="mt-2 text-justify flex items-center gap-4"
								>
									{method.jsDoc?.doc ? method.jsDoc?.doc : ''}
								</div>

							</article>
						{/each}
					</div>
				</div>
			{/if}

			{#if content.functionDef}
				{@const params = content.functionDef.params}

				<div>
					<table class="w-full text-left border-collapse">
						<thead
							><tr
								><th
									class="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
									><div
										class="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20"
									>
										PARAMETER
									</div></th
								><th
									class="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
									><div
										class="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20"
									>
										TYPE
									</div>
								</th>
								<th
									class="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
									><div
										class="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20"
									>
										DESCRIPTION
									</div>
								</th>
							</tr>
						</thead><tbody class="align-baseline">
							{#each params as param}
								<tr>
									<td
										class="py-2 pr-2 font-mono font-medium text-xs leading-6 text-indigo-500 whitespace-nowrap dark:text-sky-400"
									>
										{param.name}

										{#if param.optional}
											?
										{/if}
									</td>
									{#if param.tsType}
										<td
											class="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
										><span
												class="text-sm"
												>{@html getTypeWithURL(ParseType(param.tsType), docs, base)}</span
											>
										</td>
									{/if}
									<td
										class="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
									>
										{param.jsDoc?.doc
											? param.jsDoc?.doc
											: ''}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
					<div
						class="sticky bottom-0 h-px -mt-px bg-slate-200 dark:bg-slate-400/20"
					/>
				</div>
			{/if}
		</div>
	</article>
</div>
