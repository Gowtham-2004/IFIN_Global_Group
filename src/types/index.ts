import { type LucideIcon } from 'lucide-react'

export interface Slide {
  id: number
  heading: string
  description: string
  type: 'globe' | 'network' | 'security' | 'cloud' | 'logos'
}

export interface FormData {
  username: string
  password: string
  rememberMe: boolean
}

export interface InputFieldProps {
  label: string
  type: string
  icon?: LucideIcon
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
  name: string
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'sso'
  children: React.ReactNode
  onClick?: () => void
  loading?: boolean
  icon?: React.ReactNode
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}
