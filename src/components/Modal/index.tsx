import React, { MouseEventHandler } from 'react'
import CrossIcon from '@/components/icons/CrossIcon'

interface ModalProps {
  content: React.ReactNode
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal py-12 relative h-max">
        <button
          className="text-grey-400 absolute right-6 top-6"
          onClick={handleClose}
        >
          <CrossIcon />
        </button>
        <div className="px-4 sm:px-0">{content}</div>
      </div>
    </div>
  )
}

export default Modal
