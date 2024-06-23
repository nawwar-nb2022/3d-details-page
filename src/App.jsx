import { CameraControls, KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import './App.css'
import Configurator from './components/Configurator'
import Experience from './components/Experience'
import Movement from './components/Movement'
import {  useCustomize } from './context/Customize'


function App() {
  const {cameraRef} = useCustomize()


    const mapKeyboard = useMemo(()=>[
          {name : "forward" , keys : ["keyW"]},
          {name : "back" , keys : ["keyS"]},
          {name : "left" , keys : ["keyA"]},
          {name : "right" , keys : ["keyD"]},
          {name : "jump" , keys : ["space"]},
      ] , [])

  return (

      <main className="App" >
        <KeyboardControls map={mapKeyboard}>
                    
        <Canvas camera={{position : [2,0,2]}} >
          <color  attach="background" args={["#213547"]}/>
          <fog attach="fog" args={["#213547", 10, 20]} />
          
          <CameraControls ref={cameraRef} />

            <Experience/>
        </Canvas>
        </KeyboardControls>

        <Configurator/>
      </main>

  )
}

export default App
