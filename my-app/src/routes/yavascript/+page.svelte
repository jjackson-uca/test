<script>
	import { onMount } from 'svelte';

	onMount(() => {

        let meter = document.getElementsByClassName('battery').item(0);
        var percent = 0; 
        setInterval(()=>{
            percent++; 
            meter.value = percent; 
            if(percent > 99) percent = 0; 
        },50)


	});




</script>

<div class="span">
    <meter min=0 max = 100 value=50 class="battery"></meter>
</div>

<style>
    .red-block{
        width: 50px;
        height: 50px; 
        background-color: red;
        position: absolute;
        top: 50px; 
        left: 50px;
    }

    .span, .span_large{
    float: left;
    width: 100px;
    background-color: rgba(0,0,0, 0.02);
    height: 100px;
    vertical-align: middle;
    border-radius: 1px;
    margin-right: 100px;
}

    .battery{
    width: 28px;
    height: 14px;
    border: 1px #777 solid;
    border-radius: 2px;
    position: relative;
            animation: charge 5s linear infinite;
    top: 40px;
    margin: 0 auto;
}

    @keyframes charge{
    0%{box-shadow: inset 0px 0px 0px blue;}
    50%{box-shadow: inset 20px 0px 0px blue;}
    100%{box-shadow: inset 30px 0px 0px blue;}
}
</style>