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

	camera.position.z = 60;
	camera.position.y = 2;

	let planeGeometry = new THREE.PlaneGeometry(200,900);
	planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(- Math.PI/2));
	// let geometry = new THREE.BoxGeometry(10,10,10);
	let grounMaterial = new THREE.MeshPhongMaterial({
		color: 0xffffff
	});

	let plane = new THREE.Mesh(planeGeometry, grounMaterial);


	let mesh;
	let loader = new THREE.TextureLoader();

	loader.load('texture.jpg', function(texture){
		let geometry = new THREE.SphereGeometry(20,100,100);
		let material = new THREE.MeshBasicMaterial({
			map: texture
		});
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.y = 25;
		mesh.castShadow = true;
		    
		// add to the scene
		scene.add(mesh);
	})


	
	// let mesh = new THREE.Mesh(geometry, grounMaterial);

	let pointLight = new THREE.PointLight(0xdfebff);
	pointLight.position.y = 30;
	pointLight.position.z = 20;

	// scene.background = new THREE.Color(0xeeeeee);
	// scene.add(mesh);
	// scene.add(new THREE.AmbientLight(0x404040));
	scene.add(plane);
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