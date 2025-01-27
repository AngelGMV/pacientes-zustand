import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
    const deletePatient = usePatientStore((state)=> state.deletePatient)
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailsItem label="ID" data={patient.id}/>
            <PatientDetailsItem label="Nombre" data={patient.name}/>
            <PatientDetailsItem label="Propietario" data={patient.caretaker}/>
            <PatientDetailsItem label="Email" data={patient.email}/>
            <PatientDetailsItem label="Fecha alta" data={patient.date.toString( )}/>
            <PatientDetailsItem label="Sintomas" data={patient.symptoms}/>

            <div className="flex justify-between gap-3 mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-mainColor hover:bg-secondaryColor text-white font-bold uppercase rounded-lg"
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
