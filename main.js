(function(){
	// Definir escena
	let scene = new THREE.Scene();
	let mesh = null;
	
	// Definir cámara
	const aspectRatio = window.innerWidth / window.innerHeight;
	let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

	// Definir el render
	let renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	renderer.shadowMap.enable = true; //Activar calculo de mapa 
	renderer.shadowMap.soft = true; //Suavizar sombra
	renderer.shadowMap.type = THREE.PCFShadowMap; //cambiar tipo de sombra

	camera.position.z = 80;
	camera.position.y = 2;

	let planeGeometry = new THREE.PlaneGeometry(200,900);
	planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(- Math.PI/2));
	// let geometry = new THREE.BoxGeometry(10,10,10);
	let grounMaterial = new THREE.MeshPhongMaterial({
		color: 0x222222
	});

	let plane = new THREE.Mesh(planeGeometry, grounMaterial);
	plane.receiveShadow = true;

	let loader = new THREE.TextureLoader();

	loader.load('texture.jpg', function(texture){
		let geometry = new THREE.SphereGeometry(20,100,100);
		let material = new THREE.MeshBasicMaterial({ map: texture });
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.y = 25;
		mesh.castShadow = true;
		    
		// add to the scene
		scene.add(mesh);
	})
	
	let pointLight = new THREE.PointLight(0xdfebff);
	pointLight.position.y = 60;
	pointLight.position.z = 20;
	pointLight.castShadow = true;

	let helper = new THREE.CameraHelper(pointLight.shadow.camera);

	scene.background = new THREE.Color(0xeeeeee);
	scene.add(helper);

	scene.add(plane);
	scene.add(pointLight);

	scene.add(new THREE.AmbientLight(0x404040));


	let controls = new THREE.OrbitControls(camera, renderer.domElement);

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