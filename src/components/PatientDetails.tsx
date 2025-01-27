import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
    const deletePatient = usePatientStore((state)=> state.deletePatient)
    const getPatientByID = usePatientStore((state)=> state.getPatientByID)
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailsItem label="ID" data={patient.id}/>
            <PatientDetailsItem label="Nombre" data={patient.name}/>
            <PatientDetailsItem label="Propietario" data={patient.caretaker}/>
            <PatientDetailsItem label="Email" data={patient.email}/>
            <PatientDetailsItem label="Fecha alta" data={patient.date.toString( )}/>
            <PatientDetailsItem label="Sintomas" data={patient.symptoms}/>

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-mainColor hover:bg-secondaryColor text-white font-bold uppercase rounded-lg"
                    onClick={()=> getPatientByID(patient.id)}
                >
                    Editar
                </button>
                
                <button 
                    type="button"
                    className="py-2 px-10 bg-alertColor hover:bg-alertHoverColor text-white font-bold uppercase rounded-lg"
                    onClick={()=>deletePatient(patient.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
