<script>
	//////////////////////////////////////////////////////
	// variables

	import { onMount } from 'svelte';

    let audio
    let input
    let file

	onMount(() => {
        audio = document.getElementById("audiotag"); 
        input = document.getElementById("file"); 

        input.addEventListener('change', ()=>{
            file = input.files[input.files.length-1];
            let temp =  URL.createObjectURL(file);  
            audio.src = temp; 
        });

    });
</script>

<div class="btn-container">
	<audio id="audiotag" controls></audio>
	<input class="input-file" type="file" id="file" accept="audio/*" />
</div>

<style>
	body {
		overflow: hidden;
		margin: 0;
		background: linear-gradient(#07279b, #000, #000);
		background-size: 8px 8px;
	}

	button {
		font-family: monospace;
		background-color: black;
		border: green;
		color: magenta;
		font-size: 20px;
		z-index: 1;
		display: inline;
	}

	.btn-container {
		position: absolute;
		bottom: 0;
		display: flex;
		width: 100%;
		background: black;
	}

	input {
		color: white;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
</style>
