<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="flex w-full justify-between p-4 shadow">
	<div class="flex items-center gap-x-2">
		<a href="/" class="contents">
			<img src="/logo-light.png" alt="DataLoom" class="h-8 w-8" />
			<div class="font-semibold">DataLoom</div>
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
<footer class="fixed bottom-0 w-full bg-gray-600 p-4 text-center text-white">
	<div>Copyright © 2025 DecafDev</div>
</footer>
