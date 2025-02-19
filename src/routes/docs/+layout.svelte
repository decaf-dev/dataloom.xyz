<script lang="ts">
	import { page } from '$app/state';
	import clsx from 'clsx';

	const { children } = $props();

	const ROUTES: {
		label: string;
		value: string;
	}[] = [
		{
			label: 'Quickstart',
			value: '/docs/quickstart'
		},
		{
			label: 'Migrate',
			value: '/docs/migrate'
		}
	];
</script>

<div class="flex">
	<div class="min-h-[calc(100vh-112px)] w-[300px] border-r border-gray-200">
		<ul class="px-2 py-3">
			{#each ROUTES as route (route.value)}
				<a href={route.value}>
					<li
						class={clsx('mb-2 rounded-md p-2', {
							'bg-gray-100': page.url.pathname === route.value
						})}
					>
						{route.label}
					</li>
				</a>
			{/each}
		</ul>
	</div>
	<div class="p-4">
		{@render children()}
	</div>
</div>
