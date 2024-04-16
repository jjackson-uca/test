<script>
    import MyButton from './MyButton.svelte';

    export let buttons
</script>

{#each buttons as i}
    <MyButton name={i.name} message={i.message}></MyButton>
{/each}