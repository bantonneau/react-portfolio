import React from 'react'

export default function ContactMe({ open, children }) {
    if (!open) return null
    
  return (
    <div>
        {children}
    </div>
  )
}
