<script>
    import {locationhash} from "../stores/locationhash";
    import {get_routing} from "../util/content";

    const state = locationhash();
    const routes_map = get_routing();

    $: routes = Array.from(Object.entries(routes_map));
    $: view = $state ? routes_map[$state.slice(1)] : null;
</script>

<fieldset>
    {#if $state}
        <legend>NAVIGATION :: {$state}</legend>
    {:else}
        <legend>NAVIGATION</legend>
    {/if}

    <a href="#">
        <h3 style="display:inline;">home</h3>
    </a>

    {#each routes as [route]}
        ||
        <a href="#{route}">
            <h3 style="display:inline;">{route}</h3>
        </a>
    {/each}
</fieldset>

{#if view}
    <svelte:component this={view} />
{:else}
    <h1>parcel-plugin-svelte-markc</h1>

    <p>
        To begin, click a link in the
        <b>NAVIGATION</b>
        header.
    </p>
{/if}
