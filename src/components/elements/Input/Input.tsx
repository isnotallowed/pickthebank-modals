import React, { useState } from 'react'

interface InputProps {
  placeholder: string
  value: string
  onChange: (newValue: string) => void
  type?: string
  className?: string
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div
      className={`input-field relative w-full rounded-full border-[1.25px] border-grey-200 ${className}`}
    >
      <input
        value={value}
        onChange={handleChange}
        type={type}
        className="w-full rounded-full px-[28px] py-[21px] text-[15px] font-medium"
        placeholder={placeholder}
      />
    </div>
  )
}
