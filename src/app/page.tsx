'use client'

import React from 'react'
import { ModalProvider, useModal } from '@/contexts/ModalContext'
import { SignUpModalContent } from '@/components/modals/SignUpModalContent'
import { Button } from '@/components/elements/Button'
import { useShowModal } from '@/usecases/modals'

export default function Home() {
  const { showSignUpModal } = useShowModal()
  const handleClickOpenModal = () => {
    console.log('log')
  }

  return (
    <main>
      <Button text="Sign up with Email" onClick={showSignUpModal} />
    </main>
  )
}
