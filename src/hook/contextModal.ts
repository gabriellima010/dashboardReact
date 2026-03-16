import { createContext } from 'react'

export type ModalAction = "create" | "edit" | "delete" | null

interface ModalContextType {
  setModalAction: React.Dispatch<React.SetStateAction<ModalAction>>
}

export const ContextModal = createContext<ModalContextType | null>(null)