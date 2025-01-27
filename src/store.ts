import { create } from 'Zustand'
import { DraftPatient, Patient } from './types'
import { v4 as uuidv4 } from 'uuid'
import { devtools, persist } from 'zustand/middleware'
type PatientState = {
    patients: Patient[]
    activeID: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientByID: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(
    devtools(
        persist((set) => ({
            patients: [],
            activeID: '',
            addPatient: (data) => {
                const newPatient = createPatient(data)
                set((state) => ({
                    patients: [...state.patients, newPatient]
                }))
            },
            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)
                }))
            },
            getPatientByID: (id) => {
                set(() => ({
                    activeID: id
                }))
            },
            updatePatient: (data) => {
                set((state) => ({
                    patients: state.patients.map(patient => patient.id === state.activeID ?
                        { id: state.activeID, ...data } : patient),
                    activeID: ''
                }))
            }
        }), {
            name: 'patient-storage'
        })
    )
)