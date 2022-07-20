<script>
	import { packageName } from '$root/utils/docs';
	import { base } from '$app/paths';

	export let functions = [];
	export let classes = [];
</script>

<head>
	<title>Documentation - Biscuit</title>
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

		<nav class="text-base lg:text-sm w-70 pr-8 xl:w-72 xl:pr-16">
			<ul class="space-y-9">
				<li>
					<details open>
						<summary class="list-none w-full cursor-pointer">
							<span class="open-icon">-</span><span
								class="closed-icon">+</span
							>
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
								<span
									class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-nova-500 before:bg-nova-500"
								>
									Introduction
								</span>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<details open>
						<summary class="list-none w-full cursor-pointer">
							<span class="open-icon">-</span><span
								class="closed-icon">+</span
							>
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

								<li class="relative">
									<a
										class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
										href={`${base}/docs/${pack}/function/${f.name}`}
										>{f.name}
									</a>
								</li>
							{/each}
						</ul>
					</details>
				</li>

				<li>
					<details open>
						<summary class="list-none w-full cursor-pointer">
							<span class="open-icon">-</span><span
								class="closed-icon">+</span
							>
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

								<li class="relative">
									<a
										class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
										href={`${base}/docs/${pack}/class/${c.name}`}
										>{c.name}
									</a>
								</li>
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
				biscuit
			</p>
			<h1
				class="font-display text-3xl tracking-tight text-slate-900 dark:text-white"
			>
				Introduction
			</h1>
		</header>

		<div>
			<p>
				The biscuit Discord library is built ontop of Discordeno and
				webspec APIs, we aim to provide portability.
			</p>

			<div>
				<h2
					class="font-display text-2xl mt-5 tracking-tight text-slate-900 dark:text-white"
				>
					Installation (for <a
						href="https://nodejs.org/en/download/"
						target="_blank"
						class="font-bold text-nova-500">node 18.+</a
					>)
				</h2>

				<p />
				<blockquote
					class="relative p-4 text-lg mt-2 italic border-l-4 bg-neutral-100 text-nova-600 border-nova-500 quote"
				>
					<p>npm install @oasisjs/biscuit</p>

					<p>pnpm add @oasisjs/biscuit</p>

					<p>yarn add @oasisjs/biscuit</p>
				</blockquote>
			</div>

			<div>
				<h2
					class="font-display text-2xl mt-5 tracking-tight text-slate-900 dark:text-white"
				>
					Why biscuit?
				</h2>

				<p />
				<ul class="list-disc">
					<li>
						<a
							href="https://en.wikipedia.org/wiki/Unix_philosophy"
							target="_blank"
							class="text-nova-500">Minimal</a
						>, non feature-rich!
					</li>
					<li>Crossplatform</li>
					<li>Consistent</li>
					<li>Performant</li>
					<li>Small bundles</li>
				</ul>
			</div>
		</div>
	</article>
</div>
