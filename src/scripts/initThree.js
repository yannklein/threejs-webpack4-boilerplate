import * as THREE from 'three';

let camera;
let scene;
let renderer;

const init = threeEl => {
  camera = new THREE.PerspectiveCamera(70, threeEl.offsetWidth / threeEl.offsetHeight, 0.01, 10);
  camera.position.z = 1;

  scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshNormalMaterial();

  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'cube';
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(threeEl.offsetWidth, threeEl.offsetHeight);
  threeEl.appendChild(renderer.domElement);

  const onWindowResize = () => {
    camera.aspect = threeEl.offsetWidth / threeEl.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(threeEl.offsetWidth, threeEl.offsetHeight);
  };

  window.addEventListener('resize', onWindowResize, false);
};

const animate = () => {
  requestAnimationFrame(animate);
  scene.getObjectByName('cube').rotation.x += 0.01;
  scene.getObjectByName('cube').rotation.y += 0.02;

  renderer.render(scene, camera);
};

const initThree = threeEl => {
  init(threeEl);
  animate();
};

export default initThree;
