import React, { MouseEventHandler } from 'react'
import CrossIcon from '@/components/icons/CrossIcon'

interface ModalProps {
  content: React.ReactNode
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="text-grey-400 absolute top-5 right-5 sm:right-6 sm:top-6"
          onClick={handleClose}
        >
          <CrossIcon />
        </button>
        <div className="px-5 sm:px-0">{content}</div>
      </div>
    </div>
  )
}
