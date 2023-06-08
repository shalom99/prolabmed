import create from 'zustand'


export const useAppointmentStore = create((set) => ({
    data: [],
    isLoading: false,
    error: null,
   
}))