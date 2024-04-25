<script>
	import { onMount } from "svelte";

	let url;
    let name 

    onMount(()=>{
        url = window.location; 
        console.log(url); 
        name = url.pathname.split('/').at(-1); 
    })
</script>

<h1> Hello there, {name}!</h1>
