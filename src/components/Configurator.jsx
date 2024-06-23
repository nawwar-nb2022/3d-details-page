import { useCustomize } from "../context/Customize"


const Configurator = () => {

    const { 
        material  , 
        setMaterial , 
        setLegs , 
        legs , 
        Chair , 
        setChair , 
        Cushion , 
        setCushion  , 
        chairColors  , 
        cushionColors,
        cameraRef
    } = useCustomize()
    return (
        <div className="configurator" >
                <div className="materialContainer">
                    <div className="title">
                        chair material
                    </div>
                    <div className="container">
                        <div className={`material-item ${material === "leather" && "active"}`} 
                         onClick={()=>{
                             setMaterial("leather")  
                             cameraRef.current?.setLookAt(1,1,2,0,1,0,true) 
                             cameraRef.current?.dolly(-1,true)                     
                             }}>
                            <div className={`value ${material === "leather" && "active"}`} >
                                    leather
                            </div>
                        </div>
                        <div   onClick={()=>{
                            setMaterial("fabric")
                             cameraRef.current?.setLookAt(1,1,2,0,1,0,true)
                            }}>
                            <div className={`value ${material === "fabric" && "active"}`} >
                                    fabric
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="LegsContainer">
                    <div className="title">
                        legs
                    </div>
                    <div className="container">
                        <div className="legs-item"  onClick={()=>{
                            setLegs(0)
                            
                             cameraRef.current?.setLookAt(1,1,-2,-1,-3,0,true)
                            }}>
                            <div className={`value ${legs === 0 && "active"}`} >
                                    modern
                            </div>
                        </div>
                        <div className="legs-item"  onClick={()=>{
                            setLegs(1)
                             cameraRef.current?.setLookAt(1,-1,-2,-1,-1,2,true)
                            }}>
                            <div className={`value ${legs === 1 && "active"}`} >
                                    classic
                            </div>
                        </div>
                    </div>
                </div>
                <div className="colorContainer">
                    <div className="title">
                        Chair color <span>current is {Cushion.name}</span>
                    </div>
                    <div className="container">
                        {cushionColors.map((data , rowID)=>(
                            <div key={rowID}>
                                <div className={`colorItem ${Cushion.color === data.color &&  "active-color"}`} style={{backgroundColor: data.color}} title={data.name}
                                    onClick={()=>{
                                        setCushion(data)
                                        cameraRef.current?.setLookAt(2,2,-2,-1,-1,2,true)
                                    }}
                                />
                            </div>
                        ))}
                        <div style={{width :"32px" , height : "32px"}}>
                            <input type="color" className="colorItem" style={{
                                backgroundColor : "transparent" , width:"100%" , height:"100%" 
                            }} onChange={(e)=>{
                                setCushion({color : e.target.value , name :"custom"})
                                cameraRef.current?.setLookAt(2,2,-2,-1,-1,2,true)
                            }}/>
                        </div>
                    </div>
                </div>

                <div className="colorContainer">
                    <div className="title">
                        Cushion color <span> current is  {Chair.name}</span>
                    </div>
                    <div className="container">
                        {chairColors.map((data, rowID)=>(
                            <div key={rowID}>
                                <div  className={`colorItem ${Chair.color === data.color &&  "active-color"}`}  style={{backgroundColor: data.color}} title={data.name} 
                                    onClick={()=>{
                                        setChair(data)
                                        cameraRef.current?.setLookAt(2,1,1,0,0,1,true)
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            
        </div>
    )
}

export default Configurator
