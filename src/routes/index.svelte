<script>
	import { base } from '$app/paths';
</script>

<head>
	<title>Biscuit</title>
</head>

<div class="relative mx-auto grid grid-cols-1 grid-rows-1 gap-20">
	<div class="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
		<h1 class="text-6xl mt-7 px-7 font-bold">
			Biscuit
		</h1>
	</div>
	<div class="subtitle-box relative mx-auto flex max-w justify-center sm:px-2 lg:px-8 xl:px-12">
		<h2 class="subtitle text-2xl font-medium text-nova-600">
			A brand new bleeding edge non bloated Discord library
		</h2>
	</div>

	<div class="relative mx-auto place-self-center">
		<a href={`${base}/docs`}>
			<button class="bg-transparent hover:bg-nova-500 text-nova-500 font-semibold hover:text-white py-2 px-4 border border-nova-500 hover:border-transparent rounded">
				Documentation
			</button>
		</a>
	</div>
</div>

