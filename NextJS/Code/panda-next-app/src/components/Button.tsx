import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  isLoading: boolean
  loadingText: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  isLoading = false,
  loadingText = "Loading..."
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all disabled:opacity-50 ${className}`}
    >
      {isLoading ? loadingText : children}
    </button>
  )
}

export default Button
    