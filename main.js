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

	camera.position.z = 25;
	camera.position.y = 1;


	let geometry = new THREE.BoxGeometry(10,10,10);
	let grounMaterial = new THREE.MeshPhongMaterial({
		color: 0xffffff
	});
	let mesh = new THREE.Mesh(geometry, grounMaterial);

	let pointLight = new THREE.PointLight(0xdfebff);
	pointLight.position.y = 30;
	pointLight.position.z = 20;

	scene.background = new THREE.Color(0xeeeeee);
	scene.add(mesh);
	// scene.add(new THREE.AmbientLight(0x404040));
	scene.add(pointLight);


	function loop()
	{
		requestAnimationFrame(loop);
		// console.log('Nuevo Fotograma')
		mesh.rotation.y += 0.01;
		mesh.rotation.z += 0.02;
		renderer.render(scene, camera);	
	}

	loop();

})();