import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( {
    color: 0x00ff00,
} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const ambientLight = new THREE.AmbientLight(0xff4040, 0.25);
scene.add(ambientLight);
const spheregeometry = new THREE.SphereGeometry( 0.25, 32, 16 );
const lightmaterial = new THREE.ShaderMaterial( {
    color: 0xff0000,
} );
const sphere = new THREE.Mesh( spheregeometry, lightmaterial );
camera.position.z = 12;
const color = 0xff4040;
const intensity = 100;
const light = new THREE.PointLight(color, intensity);
// const light = new THREE.AmbientLight( 0x404040 ); // soft white light
light.position.set(-1, 2, 4);
sphere.position.set(-1, 2, 4);
scene.add( light );
scene.add(sphere)


let xrotate = 0.003
camera.position.y = 8;
camera.rotation.x = -0.6;

let lightXR = 4;
let lightYR = 4;
let lightZR = 4;
let lightSpeed = 0.01;
function animate() {
	renderer.render( scene, camera );
    // if (camera.rotation.x >= 0.5 || camera.rotation.x <= -0.5) {
    //     xrotate *= -1;
    // }
    // camera.rotation.x += xrotate;
    console.log(cube.rotation.x);

    cube.rotation.y += 0.01;
    // cube.rotation.z = 0.05;
    // spin the light around the cube

    let lightYR = 4 * Math.sin(Date.now() * 0.0002);

    let lightPositionX = Math.sin(Date.now() * -0.002);
    let lightPositionY = Math.cos(Date.now() * 0.002);
    let lightPositionZ = Math.cos(Date.now() * -0.002);
    light.position.x = lightXR * lightPositionX;
    sphere.position.x = lightXR * lightPositionX;
    light.position.z = lightZR * lightPositionZ;
    sphere.position.z = lightZR * lightPositionZ;
    light.position.y = lightYR * lightPositionY;
    sphere.position.y = lightYR * lightPositionY;
}
renderer.setAnimationLoop( animate );