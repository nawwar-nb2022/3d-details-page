import { createContext, useContext, useRef, useState } from "react";

const CustomizeContext = createContext(undefined)

const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

export const CustomizeProvider = ({children})=>{
    const [material ,setMaterial] = useState("leather")
    const [legs ,setLegs] = useState(1)
    const [cameraPosition , setCameraPosition] = useState([2,0,2])

    const cameraRef = useRef()

    const [Cushion ,setCushion] = useState(cushionColors[0])
    const [Chair ,setChair] = useState(chairColors[0])
    return <CustomizeContext.Provider value={{
        material , setMaterial ,
        legs ,setLegs , 
        Chair , setChair , 
        Cushion , setCushion  , 
        chairColors  , cushionColors,
        cameraRef,
        cameraPosition , setCameraPosition
    }}>
        {children}
    </CustomizeContext.Provider>
}

export const useCustomize  = ()=> useContext(CustomizeContext)