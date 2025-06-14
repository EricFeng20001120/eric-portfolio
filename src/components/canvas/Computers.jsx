import {Suspense, useState, useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";


const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  
  return (
    //<div>Computers</div>
    
    <mesh>
      <hemisphereLight intensity = {2.5} groundColor = "black" />
      <pointLight intensity = {1.5}/>
      <spotLight
        position = {[-20, 50, 10]}
        angle = {0.12}
        penumbra={1}
        intensity = {2}
        castShadow
        shadow-mapSize = {1024}
      />
      <primitive
        object={computer.scene}
        scale = {0.75}
        position = {[0, -4, -1.5]}
        rotation = {[-0.01, -0.2,-0.1]}
      />
    </mesh>
    
  )
}

const ComputerCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)')

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])
  

  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20,3,5], fov: 25}}
    gl = {{preserveDrawingBuffer: true}}
    >
      <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls 
          enableZoom = {false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate = {true}
          autoRotate
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas;