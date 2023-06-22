import Paciente from "./Paciente"
import{useState,useEffect} from "react";

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
  useEffect(()=>{
    if(pacientes.length>0){
   console.log("nuevo paciente")
  }
  },[pacientes]
  )
 
  return (
  
    <div className='md:w-1/2 log:w-3/5 md:h-screen overflow-y-scroll'>
    
    {pacientes&& pacientes.length ? ( 
     
     <>
    
     
   {pacientes.map((paciente)=>(
   <Paciente
   key={paciente.id}
   paciente={paciente}
   setPaciente={setPaciente}
   eliminarPaciente={eliminarPaciente}
   
   />
   )) 
   
   
   }
   
   </>
  
  
  ): (
<>
<h2 className="font-black text-3xl text-center">No hay pacientes!</h2>
   <p className='text-xl mt-5 mb-10 text-center'> 
   empieza {''}
     <span className="text-indigo-600 fond-bold ">
       Agrega pacientes </span>
   </p>



</>

    )
    }
    
   
    

    </div>
  )
}

export default ListadoPacientes
