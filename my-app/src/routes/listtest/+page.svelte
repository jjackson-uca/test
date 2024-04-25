<script>
	import { onMount } from 'svelte';
import { getBreweries, myName, sayHello } from './brewery'; 
import {runtest, Student} from './classes'

let newData = [];
	let button; 
	let page = 1;
	let defaultPerPage = 50;
	let scalar = 1;
    let padbeforeload = 150; 

	$: listdata = [...newData];
onMount(()=>{
    runtest(); 
    let John = new Student('John', 90, '1251bab'); 
    John = 7; 
})
	async function getData() {	
        let temp = await getBreweries(page+scalar, defaultPerPage); 	
        newData = [...newData, ...temp];  
		scalar++;
	}

    async function handleScroll(e){
        let scrollH = e.target.scrollHeight; 
        let clientH = e.target.clientHeight; 
        let scrollT = e.target.scrollTop; 
        console.log('scrolling', 'sh:', scrollH, ' ch:', clientH, ' st', scrollT); 
        let offset = scrollH - clientH; 
        console.log('offset', offset); 
        if(offset < scrollT+ padbeforeload){
            getData(); 
        }

    }
</script>


<div on:scroll={(e)=>{handleScroll(e)}} style="height: 50vh; overflow-y:scroll">

<ul>
	{#each listdata as datum}
		{#if datum.url}
			<li><a href={datum.url}>{datum.name}</a></li>
		{/if}
	{/each}
</ul>

<button
	bind:this={button}
	on:click={() => {
		getData();
	}}>Load me Data!</button
>

</div>
