import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react'
import Logo from './Logo'
import InputField from './InputField'
import Button from './Button'
import { type AuthFormProps } from '../types'

function getPasswordStrength(pw: string): { score: number; label: string; color: string } {
  let score = 0
  if (pw.length >= 8) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[a-z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  const levels = [
    { score: 0, label: '', color: '' },
    { score: 1, label: 'Weak', color: '#EF4444' },
    { score: 2, label: 'Fair', color: '#F97316' },
    { score: 3, label: 'Good', color: '#EAB308' },
    { score: 4, label: 'Strong', color: '#22C55E' },
    { score: 5, label: 'Very Strong', color: '#16A34A' },
  ]
  return levels[score] || levels[0]
}

export default function ResetPasswordForm({ onNavigate }: AuthFormProps) {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ new?: string; confirm?: string }>({})

  const strength = getPasswordStrength(newPassword)

  const validate = (): boolean => {
    const errs: typeof errors = {}
    if (newPassword.length < 8) errs.new = 'Minimum 8 characters required'
    if (newPassword !== confirmPassword) errs.confirm = 'Passwords do not match'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setLoading(false)
    onNavigate('success')
  }

  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full max-w-[460px]"
    >
      <div className="login-card p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col items-center mb-6">
          <Logo />
          <h1 className="mt-6 text-2xl font-heading font-bold text-[#1F2937]">
            Reset Password
          </h1>
          <p className="mt-1 text-sm font-body text-[#6B7280]/70 text-center">
            Choose a strong password for your account
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            label="New Password"
            type={showNew ? 'text' : 'password'}
            name="newPassword"
            icon={Lock}
            value={newPassword}
            onChange={(e) => { setNewPassword(e.target.value); setErrors({}) }}
            error={errors.new}
            required
            suffix={
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="flex items-center justify-center w-10 h-10 text-[#6B7280]/40 hover:text-brand/70 focus:text-brand/70 transition-colors rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand/20"
                aria-label={showNew ? 'Hide' : 'Show'}
              >
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />

          {newPassword && (
            <div className="mb-5 -mt-2">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-all duration-300"
                    style={{
                      background: i <= strength.score ? strength.color : '#E5E7EB',
                    }}
                  />
                ))}
              </div>
              {strength.label && (
                <p className="text-xs font-body" style={{ color: strength.color }}>
                  {strength.label}
                </p>
              )}
            </div>
          )}

          <InputField
            label="Confirm Password"
            type={showConfirm ? 'text' : 'password'}
            name="confirmPassword"
            icon={Lock}
            value={confirmPassword}
            onChange={(e) => { setConfirmPassword(e.target.value); setErrors({}) }}
            error={errors.confirm}
            required
            suffix={
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="flex items-center justify-center w-10 h-10 text-[#6B7280]/40 hover:text-brand/70 focus:text-brand/70 transition-colors rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand/20"
                aria-label={showConfirm ? 'Hide' : 'Show'}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />

          <Button variant="primary" type="submit" loading={loading}>
            Reset Password
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
