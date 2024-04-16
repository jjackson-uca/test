<script>
	import ButtonGroup from '../../lib/ButtonGroup.svelte';
	
    let myName = "Joseph Smith"; 

	let arr = [];
	for (let i = 1; i < 21; i++) {
		arr.push({
            name: `button ${i}`,
            message: `This is a message showing that button number ${i} was clicked!`
        });
	}
</script>

<h1>{myName}</h1>

<ButtonGroup buttons={arr}></ButtonGroup>




