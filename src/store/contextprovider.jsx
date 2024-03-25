import { createContext,useState } from "react";

export const provide=createContext({
        showAlert:()=>{{}},
        alert:{}
});
const Conpov=({children})=>{
    const [alert,setAlert]=useState({})
  // const [home,setHome]=useState(true)
  const showAlert=(message,type)=>{
    setAlert({
      message,
      type,
    })
    setTimeout(()=>{
      setAlert({})
    },1500)
  }
    return <provide.Provider value={{showAlert,alert}}>
        {children}
    </provide.Provider>
}
export default Conpov;