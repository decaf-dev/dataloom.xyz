<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>DataLoom</title>
</svelte:head>

<div class="flex h-[calc(100vh-112px)] w-full flex-col items-center justify-center gap-y-8">
	<h1 class="text-3xl leading-6 font-semibold">DataLoom</h1>
	<p class="text-lg leading-4">
		Native Obsidian tables just don't cut it. Introducing something better...
	</p>
	<button
		class="cursor-pointer rounded-lg border border-gray-500 px-4 py-3"
		onclick={() => goto('/docs/quickstart')}>Get started</button
	>
</div>
