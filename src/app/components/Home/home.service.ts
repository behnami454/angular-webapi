import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GUI } from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  animate() {
  }

  constructor() { }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {

    const gltfLoader = new GLTFLoader()
    const timelinee = gsap.timeline()
    // const gui = new GUI()

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0xFFFFFF);

    const renderer = new THREE.WebGL1Renderer();

    document.body.appendChild( renderer.domElement );

    gltfLoader.load('assets/scene.gltf', (gltf) => {

      gltf.scene.rotation.set(-3.2 , -0.1 , 9.4)
      gltf.scene.scale.set(7.1 , 9 , 0)
      gltf.scene.position.set(0 , 9 , -10)
      scene.add(gltf.scene)

      // gui.add(gltf.scene.rotation , 'x' ,0).min(-10).max(9);
      // gui.add(gltf.scene.rotation , 'y' ,0).min(-14).max(14);
      // gui.add(gltf.scene.rotation , 'z' ,0).min(-20).max(20);
      // gui.add(gltf.scene.scale , 'x' ,0).min(-10).max(9);
      // gui.add(gltf.scene.scale , 'y' ,0).min(-10).max(9);
      // gui.add(gltf.scene.scale , 'z' ,0).min(-10).max(9);
      // gui.add(gltf.scene.position , 'x' ,0).min(-10).max(9);
      // gui.add(gltf.scene.position , 'y' ,0).min(-10).max(9);
      // gui.add(gltf.scene.position , 'z' ,0).min(-10).max(9);
      // scene.add(gltf.scene)
      timelinee.to(gltf.scene.rotation, {
        z: 3.16,
        duration: 2.5
      })
      // timelinee.to(gltf.scene.position, {
      //   x:9
      // })
      // timelinee.to(gltf.scene.rotation, {
      //   z: 7,
      //   duration: 2
      // })


    })

    const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(ambientLight)

const ambientLightProbe = new THREE.AmbientLightProbe(0xffffff, 1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(ambientLightProbe)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(directionalLight)

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 40;
    scene.add(camera)

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.update();

    function animate() {
      requestAnimationFrame( animate );


      renderer.render( scene, camera );
    };
    window.requestAnimationFrame(animate)
    animate();
      }
  }



