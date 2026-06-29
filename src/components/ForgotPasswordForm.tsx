import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowLeft } from 'lucide-react'
import Logo from './Logo'
import InputField from './InputField'
import Button from './Button'
import { type AuthFormProps } from '../types'

interface ForgotPasswordFormProps extends AuthFormProps {
  setEmail?: (email: string) => void
}

export default function ForgotPasswordForm({ onNavigate, setEmail }: ForgotPasswordFormProps) {
  const [email, setLocalEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) { setError('Email is required'); return }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setEmail?.(email)
    onNavigate('otp')
  }

  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full max-w-[420px]"
    >
      <div className="login-card p-10">
        <div className="flex flex-col items-center mb-6">
          <Logo />
          <h1 className="mt-6 text-2xl font-heading font-bold text-[#1F2937]">
            Forgot Password
          </h1>
          <p className="mt-1 text-sm font-body text-[#6B7280]/70 text-center">
            Enter your email and we'll send a verification code
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            label="Company Email"
            type="email"
            name="email"
            icon={Mail}
            value={email}
            onChange={(e) => { setLocalEmail(e.target.value); setError('') }}
            error={error}
            required
          />

          <Button variant="primary" type="submit" loading={loading}>
            Send OTP
          </Button>
        </form>

        <button
          type="button"
          onClick={() => onNavigate('login')}
          className="mt-5 flex items-center justify-center gap-2 w-full text-sm text-[#6B7280]/60 font-body hover:text-brand transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Sign In
        </button>
      </div>

      <p className="mt-5 text-center text-xs text-white/25 font-body">
        &copy; {new Date().getFullYear()} IFIN Global Group. All rights reserved.
      </p>
    </motion.div>
  )
}
