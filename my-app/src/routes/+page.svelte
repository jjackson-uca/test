<div class="parent">
	<div class="child">
		<div class="gchild" style="flex-grow:8; border-width:0px; gap: 1px">
			<div class="ggchild" style="border-width:0px; gap: 1px">
				<div class="ggchild" style="flex-direction:column; border-width:0px; gap: 1px">
					<div class="ggchild">top</div>
					<div class="ggchild">top</div>
				</div>
				<div class="ggchild" style="flex-grow:4">top</div>
			</div>
			<div class="ggchild" style="border-width:0px; gap: 1px">
				<div class="ggchild" style="flex-grow:2">top</div>
				<div class="ggchild">top</div>
				<div class="ggchild">top</div>
				<div class="ggchild">top</div>
			</div>
		</div>
		<div class="gchild"><p>TEXT HERE</p></div>
	</div>
	<div class="child">
		<div class="gchild"><p>TEXT HERE</p></div>
		<div class="gchild"><p>TEXT HERE</p></div>
		<div class="gchild"><p>TEXT HERE</p></div>
		<div class="gchild"><p>TEXT HERE</p></div>
		<div class="gchild" style="border-width:0px; gap: 1px">
			<div class="ggchild"><p>text</p></div>
			<div class="ggchild" style="flex-grow:3"><p>text</p></div>
		</div>
	</div>
	<div class="child">
		<div class="gchild"><p>TEXT HERE</p></div>
		<div class="gchild"><p>TEXT HERE</p></div>
		<div class="gchild"><p>TEXT HERE</p></div>
		<div class="gchild"><p>TEXT HERE</p></div>
		<div class="gchild"><p>TEXT HERE</p></div>
	</div>
</div>

<style>
	div {
		background-color: rgb(148, 148, 255);
		border: solid;
		font-family: custom-font, Verdana, Geneva, Tahoma, sans-serif;
		font-size: 14pt;
		margin: 0px;
		padding: 0px;
	}

	.parent {
		height: 1200px;
        aspect-ratio: 9/16;
		display: flex;
		flex-direction: column;
	}

	.child:first-child {
		flex-grow: 2;
	}

	.child {
		flex-grow: 1;
		padding: 10px;
		border-width: 10px;
		margin: 10px;
		display: flex;
		gap: 1px;
	}

	.gchild {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	.ggchild {
		flex-grow: 1;
		display: flex;
	}
</style>
