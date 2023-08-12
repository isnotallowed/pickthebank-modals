import { useModal } from '@/contexts/ModalContext'
import { SignUpModalContent } from '@/components/modals/SignUpModalContent'
import React from 'react'
import { SignUpSuccessModalContent } from '@/components/modals/SignUpSuccessModalContent'

export const useShowModal = () => {
  const modal = useModal()
  return {
    showSignUpModal: () => {
      modal.openModal(<SignUpModalContent />)
    },
    showSignUpSuccessModal: (email: string) => {
      modal.openModal(<SignUpSuccessModalContent email={email} />)
    },
  }
}
