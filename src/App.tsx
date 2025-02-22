import PacientForm from "./components/PatientForm"
import PacientList from "./components/PatientList"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"

function App() {
  
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de pacientes {''}
          <span className="text-mainColor">Veterinaria</span>
        </h1>
        <div className="mt-12 md:flex">
          <PacientForm/>
          <PacientList/>
        </div>
      </div>
      <ToastContainer
      
      />
    </>
  )
}

export default App
