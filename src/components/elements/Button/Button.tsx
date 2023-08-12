import { FC, MouseEventHandler, ReactNode, useMemo } from 'react'

interface ButtonProps {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  icon?: ReactNode
  twig?: 'primary' | 'secondary' | 'white'
  disabled?: boolean
}
export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  twig = 'primary',
  icon,
  disabled,
}) => {
  const buttonStyle = useMemo(() => {
    switch (twig) {
      case 'primary':
        return 'button-primary-states'
      case 'secondary':
        return 'button-secondary-states'
      case 'white':
        return 'button-white-states'
    }
  }, [twig])

  return (
    <button
      className={`py-4 px-6 text-sm flex items-center ${buttonStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={'flex-shrink'}>{icon}</span>}
      <span className={'flex-grow'}>{text}</span>
    </button>
  )
}
