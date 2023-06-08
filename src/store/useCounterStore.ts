import {create} from 'zustand'

interface Counter {
    count: number
    increaseCount: (by: number) => void
}

export const useCounter = create<Counter>()((set) => ({
    count: 0,
    increaseCount: (by) => set((state) => ({count: state.count + by} ) )
}))