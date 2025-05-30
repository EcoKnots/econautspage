// components/ui/Button.jsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Button = ({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const Component = href ? Link : 'button'
  
  // Base classes
  const baseClasses = [
    'inline-flex items-center justify-center rounded-lg font-medium',
    'border-2 transition-all duration-300 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2'
  ]

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-primary text-white border-primary',
      'hover:bg-white hover:!text-primary' // Force text color with !important
    ],
    secondary: [
      'bg-white text-secondary border-secondary',
      'hover:bg-secondary hover:text-white'
    ]
  }

  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className.includes('w-full') ? 'w-full' : ''}`} // Added conditional width
    >
      <Component
        href={href}
        className={[
          ...baseClasses,
          ...variantClasses[variant],
          sizeClasses[size],
          className.includes('w-full') ? 'w-full' : '', // Pass width to button
          className
        ].join(' ')}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}

export default Button