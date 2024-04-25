<script>
    import { count } from '$lib/stores'
	import { onMount } from 'svelte';
    console.log(count); 

    onMount(()=>{
        document.addEventListener('click', ()=>{
            $count++
        })
    })
</script>

<pre>
    Your number of global clicks is: {$count}
</pre>

<slot></slot>
