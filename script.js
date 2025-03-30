// Inicializar Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('viewer').appendChild(renderer.domElement);

// Luz en la escena
const light = new THREE.HemisphericLight(0xffffff, 0x444444, 1);
scene.add(light);

// Posición de la cámara
camera.position.set(0, 2, 5);

// Cargar el modelo desde GitHub
const loader = new THREE.GLTFLoader();
const url = "https://tu-usuario.github.io/visor-modelos-3D/modelo.glb"; // Reemplaza con tu URL
loader.load(url, function (gltf) {
    scene.add(gltf.scene);
});

// Animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
