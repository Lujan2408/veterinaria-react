/* eslint-disable react/prop-types */
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => { 

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">

      { pacientes && pacientes.length ? 
      
      <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
              <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>

          { pacientes.map( paciente => (
            <Paciente 
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
      </>
      
      : 
      <>
        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Agrega tus pacientes {''}
                <span className="font-bold text-indigo-600">y Administralos</span>
            </p>
      </>
      }  

        

    </div>
  )
}

export default ListadoPacientes