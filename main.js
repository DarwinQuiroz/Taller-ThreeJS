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

	camera.position.z = 2;
	camera.position.y = 1;


	let geometry = new THREE.BoxGeometry(1,1,1);
	let grounMaterial = new THREE.MeshPhongMaterial({
		color: 0xffffff
	});
	let mesh = new THREE.Mesh(geometry, grounMaterial);

	let pointLight = new THREE.PointLight(0xdfebff);
	pointLight.position.y = 30;

	scene.add(mesh);
	scene.add(new THREE.AmbientLight(0x404040));
	scene.add(pointLight);


	function loop()
	{
		requestAnimationFrame(loop);
		// console.log('Nuevo Fotograma')
		renderer.render(scene, camera);	
	}

	loop();

})();