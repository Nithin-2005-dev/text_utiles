import { useContext, useState } from "react";
import Textform from "../Textform";
import Navbar from "../navbar";
import Alert from "../alert";
import About from "../About";
import { Outlet } from "react-router-dom";
import Conpov,{provide} from "../../store/contextprovider";
const App=()=>{
  const {showAlert}=useContext(provide);
  return <>
  <Conpov>
        <Navbar title={"teXtUtils"} showAlert={showAlert} ></Navbar>
      <Alert></Alert>
      <Outlet></Outlet>
      {/* <About></About> */}
  </Conpov>
  </>
}
export default App;