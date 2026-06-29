import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { User, Lock, Eye, EyeOff } from 'lucide-react'
import Logo from './Logo'
import InputField from './InputField'
import Button from './Button'
import { type FormData, type AuthFormProps } from '../types'

const MicrosoftIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
    <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
    <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
  </svg>
)

const GoogleIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

export default function LoginForm({ onNavigate }: AuthFormProps) {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [loginError, setLoginError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (loginError) setLoginError('')
  }

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!formData.username.trim()) newErrors.username = 'Username is required'
    if (!formData.password.trim()) newErrors.password = 'Password is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
    setLoginError('Invalid credentials. Please try again.')
  }

  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full max-w-[420px]"
    >
      <div className="login-card p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col items-center mb-6">
          <Logo showPortal />
          <h1 className="mt-6 text-2xl font-heading font-bold text-[#1F2937]">
            Welcome Back
          </h1>
          <p className="mt-1 text-sm font-body text-[#6B7280]/70">
            Sign in to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            label="Username"
            type="text"
            name="username"
            icon={User}
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
            required
          />

          <InputField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            icon={Lock}
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
            suffix={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center justify-center w-10 h-10 text-[#6B7280]/40 hover:text-brand/70 focus:text-brand/70 transition-colors rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand/20"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />

          {loginError && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 text-sm text-red-500 font-body text-center"
              role="alert"
            >
              {loginError}
            </motion.p>
          )}

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-[#E5E7EB] bg-white accent-brand focus:ring-brand/30 focus:ring-2 focus:outline-none"
              />
              <span className="text-sm text-[#6B7280] font-body group-hover:text-[#1F2937] transition-colors">
                Remember me
              </span>
            </label>
            <button
              type="button"
              onClick={() => onNavigate('forgot-password')}
              className="text-sm text-[#6B7280]/60 font-body hover:text-brand transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <Button variant="primary" type="submit" loading={loading}>
            Sign In
          </Button>
        </form>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E7EB]" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 text-xs text-[#6B7280]/50 font-body bg-white">
              Or continue with
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <Button variant="sso" icon={MicrosoftIcon}>
            Sign in with Microsoft
          </Button>
          <Button variant="sso" icon={GoogleIcon}>
            Sign in with Google
          </Button>
        </div>

        <p className="mt-5 text-center text-sm text-[#6B7280]/60 font-body">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => onNavigate('request-access')}
            className="text-brand hover:text-brand-hover font-medium transition-colors"
          >
            Request Access
          </button>
        </p>
      </div>

      <p className="mt-5 text-center text-xs text-white/25 font-body">
        &copy; {new Date().getFullYear()} IFIN Global Group. All rights reserved.
      </p>
    </motion.div>
  )
}
