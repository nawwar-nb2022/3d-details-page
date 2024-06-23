import {  CameraControls, MeshReflectorMaterial, OrbitControls, PresentationControls , Stage} from "@react-three/drei"
import { useRef } from "react"

import {useLoader} from "@react-three/fiber"

const Model = () => {
    const ref = useRef()

    return (
        <>
            {/* <directionalLight  color="white" position={[0,2,1]} castShadow /> */}
            <directionalLight  color="white" position={[-2,2,-2]} castShadow />
            <directionalLight  color="blue" position={[0,1,2]} castShadow />
            {/* <directionalLight  color="green" position={[0,-1,1]}/> */}
            
            {/* <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1 , Math.PI /4]}>
                <Stage environment={null} intensity={0.6} contactShadow={false}  >

                </Stage> */}


                <CameraControls  
                    distance={10}
                    minZoom={9}
                    maxZoom={30}
                    polarRotateSpeed={-0.3}
                    azimuthRotateSpeed={-0.3}
                    azimuthAngle={180}
                    // polarAngle={300}
                />

                <mesh castShadow position={[-1,0,4]}>
                    <boxGeometry/>
                    <meshStandardMaterial color="green" />
                </mesh>

                <mesh castShadow position={[0.2,1,2]}>
                    <sphereGeometry/>
                    <meshStandardMaterial color="red"  />
                </mesh>

                <mesh castShadow position={[-2,2,2]}>
                    <extrudeGeometry/>
                    <meshStandardMaterial color="inherit" opacity={0.4}  />
                </mesh>


                <mesh 
                    receiveShadow 
                    rotation={[-0.5 * Math.PI, 0, 0]}
                    position={[0, -1, 0]}> 
                    <planeGeometry  args={[170,170]}/>
                    <meshStandardMaterial color="white"/>
                </mesh>


                <mesh 
                    receiveShadow 
                    rotation={[0, 180, 0]}
                    position={[7, 0,-2]}> 
                    <planeGeometry  args={[170,170]}/>
                    
                    <meshStandardMaterial color="white"/>
                </mesh>



                {/* <mesh rotation={[-Math.PI/2 , 0,0,]} receiveShadow>
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
                </mesh> */}

            
            {/* </PresentationControls> */}
        </>
    )
}

export default Model

