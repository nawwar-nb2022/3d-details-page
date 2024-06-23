import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei"

import Chair from "./Chair"
import Lights from "./Light"

const Experience = () => {
  

    return (
        <>
            {/* 
            <directionalLight position={[0,1,0]} color="red"/>
            <directionalLight position={[0,-1,1]}/>
            <directionalLight position={[-1,1,1]}/>

            <pointLight position={[3,-1,0]} />
            <pointLight position={[-3,-1,0]} />
            <pointLight position={[0,-1,0]} color="red" /> */}

                <Lights/>
         <PresentationControls 
            speed={1.5} 
            global 
            polar={[-0.5 , Math.PI /4]}
            rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
            {/* <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0,3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            > */}
                <Stage environment={null} intensity={0.1} castShadow={false}>
                    
                        <Chair />
                  
                </Stage> 


            {/* </Float> */}

                <mesh rotation={[-Math.PI/2 , 0,0,]} position-y={-2}>
                    <planeGeometry args={[170 , 170]}/>
                    <MeshReflectorMaterial
                        blur={[300,100]}
                        resolution={2048}
                        mixBlur={1}
                        mixStrength={40}
                        roughness={1}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#101010"
                        metalness={0.5}
                    />
                </mesh> 
        </PresentationControls>

        {/* <mesh>

            <boxGeometry/>
            <meshNormalMaterial/>
        </mesh> */}
        </>
    )
}

export default Experience
