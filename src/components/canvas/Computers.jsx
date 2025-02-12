import {Suspense, useEffect, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import App from '../../App'
import * as THREE from 'three'

const Computers = ({ isMobile }) => {
  const model = useGLTF('./spacecamp2/untitled.glb')
  let mixer
  if (model.animations.length) {
      mixer = new THREE.AnimationMixer(model.scene);
      model.animations.forEach(clip => {
          const action = mixer.clipAction(clip)
          action.play();
      });
  }

  useFrame((state, delta) => {
      mixer?.update(delta)
      console.log()
  })
  return (
    <mesh>
      <hemisphereLight intensity={0.6} />
      <pointLight position={[0.5, -0.5, -4.5]} intensity={2} color={'#ff8e24'} />
      <primitive 
      object={model.scene}
      scale={isMobile ? 1 : 2.2}
      position={isMobile ? [0.6, 0, -5] : [2, -0.2, -5]}
      rotation={[0, -1, -0.1]}
      />
    </mesh>
  )
}
const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
  }, []);
  
  return(
    
    <Canvas
      frameloop='always'
      shadows
      camera={camera}
      gl={{preserveDrawingBuffer:true}}
      onCreated={state => {
        console.log(camera.position)
      }}
    > 
        <OrbitControls 
          enableZoom={false}
          minAzimuthAngle={-Math.PI/9}
          maxAzimuthAngle={Math.PI/2.5}
          minPolarAngle={Math.PI/2}
          maxPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas