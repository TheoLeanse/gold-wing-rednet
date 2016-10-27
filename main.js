var camera, scene, renderer, geometry, material, mesh;

(function init() {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;
  scene = new THREE.Scene();
  geometry = new THREE.SphereGeometry(2000, 200, 200);
  material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('display').appendChild(renderer.domElement);
})();

(function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  mesh.rotation.z += 0.03;
  renderer.render(scene, camera);
})();
