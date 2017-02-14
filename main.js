(function(){
	// Definir escena
	let scene = new THREE.Scene();
	
	// Definir cámara
	const aspectRatio = window.innerWidth / window.innerHeight;
	let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

	// Definir el render
	let renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);


	function loop()
	{
		requestAnimationFrame(loop);
		// console.log('Nuevo Fotograma')
		renderer.render(scene, camera);	
	}

	loop();

})();