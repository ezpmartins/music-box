import "./globals.css";
import "./utils/globals.js"; 
import Rotas from "./routes";
import { ToastContainer } from "react-toastify"; 

function App() {
  return (
    <>
      <Rotas />
      <ToastContainer /> 
    </>
  )
}
export default App; 