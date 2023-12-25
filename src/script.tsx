import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//Cursor
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (move) => {
  (cursor.x = move.clientX / sizes.width - 0.5),
    (cursor.y = -(move.clientY / sizes.height - 0.5));
});

//Scene
const scene = new THREE.Scene();

//Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// mesh.position.z = 0.5;
// mesh.position.y =  - 0.5;
// mesh.position.x = 0.6;
// mesh.position.set(1, -0.4, 1);

//Scale
// mesh.scale.set(0.5, 0.5, 0.5);

//Rotation
// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.75;

//Group
// const group = new THREE.Group();
// scene.add(group);

// const cube1 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: 0xff0000 })
// );

// const cube2 = new THREE.Mesh(
//   new THREE.BoxGeometry(1.5, 1.5, 1.5),
//   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// );
// cube2.position.set(1, 2, -1);

// const cube3 = new THREE.Mesh(
//   new THREE.BoxGeometry(1.5, 1.5, 1.5),
//   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// );
// cube3.position.set(2, -2, -4);

// group.add(cube1, cube2, cube3);

//AxesHelper
const axeshelper = new THREE.AxesHelper(2);
scene.add(axeshelper);

//Size
const sizes = {
  width: 800,
  height: 600,
};

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// );
// camera.position.z = 3;
camera.position.set(0, 0, 3);
camera.lookAt(mesh.position);
scene.add(camera);

//LookAt
// camera.lookAt(mesh.position)

//Renderer
const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//OrbitControl
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
//Time
// let time = Date.now();

//Clock

const clock = new THREE.Clock();

//Animation
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  // mesh.rotation.y = elapsedTime;
  // mesh.rotation.x = elapsedTime;
  // mesh.position.y = Math.sin(elapsedTime);
  // mesh.position.x = Math.sin(elapsedTime);

  //Time
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // //Animation
  // mesh.rotation.y += 0.003 * deltaTime;
  // mesh.rotation.x += 0.003 * deltaTime;

  //Update camera
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y *3
  // camera.lookAt(mesh.position);


  //Update control
  controls.update()

  //Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
