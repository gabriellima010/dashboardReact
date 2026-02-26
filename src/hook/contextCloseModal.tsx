import { createContext } from 'react';

interface ModalContextType {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ContextCloseModal = createContext<ModalContextType | null> (null);