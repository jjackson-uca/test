<script>
    export let name;
    export let message; 

    let btn; 
    let dg; 

    function openDg(){
        dg.show(); 
    }
    //HTMLDialogElement.prototype.close()
    function closeDg(){
        dg.close();
    }

</script>

<button bind:this={btn} on:click={()=>{openDg()}}>{name}</button>

<dialog bind:this={dg}>
    <h1>{name} was clicked!</h1>
    <pre>{message}</pre>
    <button on:click={()=>{closeDg()}}>close</button>
</dialog>

<style>
    button{
        width: 100px; 
        height: 40px; 
    }
</style>