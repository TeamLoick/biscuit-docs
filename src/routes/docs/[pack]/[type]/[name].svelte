<script>
	import { packageName, locationUrl } from '$root/utils/docs';

	export let functions = [];
	export let classes = [];

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
					<h2
						class="font-display font-medium text-slate-900 dark:text-white"
					>
						General
					</h2>

					<ul
						class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
					>
						<li class="relative">
							<a
								class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
								href="/docs"
							>
								Introduction
							</a>
						</li>
					</ul>
				</li>
				<li>
					<h2
						class="font-display font-medium text-slate-900 dark:text-white"
					>
						Functions
					</h2>

					<ul
						class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
					>
						{#each functions as f}
							{@const pack = packageName(f.location)}

							{#if content.name == f.name}
								<li class="relative">
									<span
										class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-sky-500 before:bg-sky-500"
									>
										{f.name}
									</span>
								</li>
							{:else}
								<li class="relative">
									<a
										class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
										href={`/docs/${pack}/function/${f.name}`}
									>
										{f.name}
									</a>
								</li>
							{/if}
						{/each}
					</ul>
				</li>

				<li>
					<h2
						class="font-display font-medium text-slate-900 dark:text-white"
					>
						Classes
					</h2>

					<ul
						class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
					>
						{#each classes as c}
							{@const pack = packageName(c.location)}

							{#if content.name == c.name}
								<li class="relative">
									<span
										class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-sky-500 before:bg-sky-500"
									>
										{c.name}
									</span>
								</li>
							{:else}
								<li class="relative">
									<a
										class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
										href={`/docs/${pack}/class/${c.name}`}
									>
										{c.name}
									</a>
								</li>
							{/if}
						{/each}
					</ul>
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
			<p class="font-display text-sm font-medium text-sky-500">
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

		<span class="h-3.5 w-px bg-sky-600/20">
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

					<ul class="text-base lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16">
						<li class="mb-2">
							<span
								class="font-display font-medium text-slate-900 dark:text-white"
								>Methods</span
							>
						</li>

						{#each methods as method}
							<li>
								<a
									class="py-2 pr-2 font-mono font-medium text-xs leading-6 text-gray-500 whitespace-nowrap"
									href={`#${method.name}`}>{method.name}</a
								>
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
													class="font-mono text-sm leading-7 text-sky-500"
													>[readonly]</span
												>
											{/if}

											{#if property.optional}
												<span
													class="font-mono text-sm leading-7 text-sky-500"
													>[optional]</span
												>
											{/if}
										</div>

										<h2
											class="mt-2 text-lg font-bold text-slate-900"
										>
											<a href={`#${property.name}`}>
												{property.name}
											</a>:
											<span class="text-lg text-red-400">
												{#if property.tsType}
													{#if property.tsType.kind === 'union'}
														{property.tsType.union
															.map((u) => u.repr)
															.join(' | ')}
													{/if}

													{#if property.tsType.kind === 'intersection'}
														{property.tsType.intersection
															.map((i) => i.repr)
															.join(' & ')}
													{/if}
													{#if property.tsType.repr && property.tsType.repr != ''}
														{property.tsType.repr}
													{/if}
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
											class="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900"
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
											: 'Description not available.'}
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
													class="font-mono text-sm leading-7 text-sky-500"
													>[optional]</span
												>
											{/if}
										</div>

										<h2
											class="mt-2 text-lg font-bold text-slate-900"
										>
											<a href={`#${method.name}`}
												>{method.name}</a
											>:
											<span class="text-lg text-red-400">
												{method.functionDef
													? method.functionDef
															.returnType?.repr
													: 'any'}
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
										class="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900"
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
										class="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400"
									>
										{param.name}

										{#if param.optional}
											?
										{/if}
									</td>
									{#if param.tsType}
										<td
											class="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
										>
											{param.tsType.kind}
											<span>&lt;</span><span
												class="text-sm"
												>{param.tsType.repr}</span
											><span>&gt;</span>
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
