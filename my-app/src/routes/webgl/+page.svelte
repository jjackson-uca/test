<script>
	import { onMount } from 'svelte';

	// Variables to hold the WebGL context, and the color and
	// position of animated squares.
	let gl;
	let color = getRandomColor();
	let position;
	let startStop = 'start';
	let button;
	let canvas;
	let running = false;
	let timer;

	onMount(() => {
		setupAnimation();
	});

	function toggleOnOff() {
        running = !running;
		running ? startAnimation() : stopAnimation();
	}

	function startAnimation() {
        running = true;
        startStop = "stop"
		timer = setInterval(drawAnimation, 17);
		drawAnimation();
	}

	function stopAnimation() {
		running = false;
		startStop = 'start';
		clearInterval(timer);
	}

	function setupAnimation() {
		if (!(gl = canvas.getContext("webgl"))) return;

		gl.enable(gl.SCISSOR_TEST);
		gl.clearColor(color[0], color[1], color[2], 1.0);
		// Unlike the browser window, vertical position in WebGL is
		// measured from bottom to top. In here we set the initial
		// position of the square to be at the top left corner of the
		// drawing buffer.
		position = [0, gl.drawingBufferHeight];
	}

	// Variables to hold the size and velocity of the square.
	const size = [60, 60];
	let velocity = 3.0;
	function drawAnimation() {
		gl.scissor(position[0], position[1], size[0], size[1]);
		gl.clear(gl.COLOR_BUFFER_BIT);
		// Every frame the vertical position of the square is
		// decreased, to create the illusion of movement.
		position[1] -= velocity;
        position[0] += velocity;
		// When the square hits the bottom of the drawing buffer,
		// we override it with new square of different color and
		// velocity.
		if (position[1] < 0) {
			// Horizontal position chosen randomly, and vertical
			// position at the top of the drawing buffer.
			position = [Math.random() * (gl.drawingBufferWidth - size[0]), gl.drawingBufferHeight];
			// Random velocity between 1.0 and 7.0
			velocity = 1.0 + 6.0 * Math.random();
			color = getRandomColor();
			gl.clearColor(color[0], color[1], color[2], 1.0);
		}
	}

	function getRandomColor() {
		return [Math.random(), Math.random(), Math.random()];
	}
</script>
<div style="display: flex; flex-direction: column">
<button
	bind:this={button}
	on:click={() => {
		toggleOnOff();
	}}>{startStop}</button
>
<canvas bind:this={canvas}></canvas>
</div>
