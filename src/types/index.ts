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

export type AuthPage = 'login' | 'request-access' | 'forgot-password' | 'otp' | 'reset-password' | 'success'

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'sso'
  children: React.ReactNode
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface AuthFormProps {
  onNavigate: (page: AuthPage) => void
}
