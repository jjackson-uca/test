<div class="circle" style="border-width:0px">
    <div class="circle dropshad" style="margin: 0px">
        <div class="circle dropshad" style="margin: 0px; align-content:center; justify-content:baseline">
            <div style="display:flex; border-width:0px; gap: 5 %">
                <div style="border-radius: .25em; aspect-ratio: .5/20; width: 1px"></div>
                <div style="border-radius: .25em; aspect-ratio: 1/11; width: 1px"></div>

            </div>
        </div>  
    </div>
</div>

<br />
<pre style="rotate: 90deg; border:none; text-align: center;
}">=</pre>


<div class="ltr">
	<div class="ttb">
		<div class="ltr">
			<div>
				<input type="checkbox" />
			</div>
			<div><input type="checkbox" /></div>
		</div>
		<div class="ltr">
			<div>
				<input type="checkbox" />
			</div>
			<div><input type="checkbox" /></div>
		</div>
		<div class="ltr">
			<div>
				<input type="checkbox" />
			</div>
			<div><input type="checkbox" /></div>
		</div>
		<div>
			<input type="button" value="" />
		</div>
		<div><input type="button" value="" /></div>
	</div>
	<div class="ttb">
        <div>
            <div class="circle"></div>
        </div>
        <div></div>
        <div class="ttb">
            <div class="circle" style="">
                <div class="circle dropshad" style="margin: 0px">
                    <div class="circle dropshad" style="margin: 0px; align-content:center; justify-content:baseline">
                            <pre style="rotate: 90deg; border:none;">=</pre>
                    </div>  
                </div>
            </div>
        </div>
    </div>
	<div class="ttb">
        <div></div>
        <div></div>
        <div></div>
        <div class="ltr">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
</div>

<style>
	div {
		border: solid;
		padding: 10px;
        gap: 4px;
        border-radius: 2em;
        flex-grow: 1;

	}

	.ltr {
		display: flex;
		flex-direction: row;
        justify-content: space-evenly;

	}


	.ttb {
		display: flex;
		flex-direction: column;
        justify-content: space-around;
	}

    .circle{
        border-radius: 90%;
        flex-grow: 0;
        aspect-ratio: 1;
    }

    .dropshad{
        border-width: 0px;
        box-shadow: 1px 1px 2px gray, 1px 1px 2px grey;
        box-shadow: inset 1px 1px 2px gray, 1px 1px 2px grey;
    }
</style>
