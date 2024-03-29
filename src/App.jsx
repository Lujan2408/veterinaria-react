import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

import { useState, useEffect } from "react"

function App() {

  const [ pacientes, setPacientes ] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [ paciente, setPaciente ] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id ) 
    setPacientes(pacientesActualizados)
  }
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
    <div className="mt-12 md:flex">
        
        <Formulario 
          pacientes={pacientes} //Esto es una prop 
          setPacientes={setPacientes} //Esto es una prop
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
    
    </div>

      <div className="text-l text-center pt-16 pb-14">
        <p>© 2024 Jose David Cardona Luján</p>
      </div>
      
    </div> 
  )
}

export default App
