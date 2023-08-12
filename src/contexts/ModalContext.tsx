import React, { createContext, useContext, useState } from 'react'
import { Modal } from '@/components/Modal'

interface ModalContextType {
  openModal: (content: React.ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

interface ModalProviderProps {
  children: React.ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null)

  const openModal = (content: React.ReactNode) => {
    setModalContent(content)
  }

  const closeModal = () => {
    setModalContent(null)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && <Modal content={modalContent} onClose={closeModal} />}
    </ModalContext.Provider>
  )
}
