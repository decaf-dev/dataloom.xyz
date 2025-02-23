<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav class="flex w-full justify-between p-4 shadow">
	<div class="flex items-center gap-x-2">
		<a href="/" class="contents">
			<img src="/logo-light.png" alt="DataLoom" class="h-8 w-8" />
			<span class="font-semibold">DataLoom</span>
		</a>
	</div>
	<div>
		<a
			href="https://github.com/decaf-dev/obsidian-dataloom"
			target="_blank"
			aria-label="Visit the GitHub repository"
		>
			<i class="fa-brands fa-github text-3xl"></i>
		</a>
	</div>
</nav>
<main>
	{@render children()}
</main>
<footer class="w-full bg-black p-10 text-center text-white">
	<div>
		Copyright © 2025 <a class="underline" href="https://github.com/decaf-dev">DecafDev</a>
	</div>
</footer>
