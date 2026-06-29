import { useState, useRef, useEffect, type KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { type AuthFormProps } from '../types'

interface OTPFormProps extends AuthFormProps {
  email?: string
}

export default function OTPForm({ onNavigate, email }: OTPFormProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''))
  const [timer, setTimer] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const [loading, setLoading] = useState(false)
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    inputsRef.current[0]?.focus()
  }, [])

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000)
      return () => clearInterval(interval)
    }
    setCanResend(true)
  }, [timer])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    if (value && index < 5) inputsRef.current[index + 1]?.focus()
  }

  const handleKeyDown = (index: number, e: KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handleResend = () => {
    setOtp(Array(6).fill(''))
    setTimer(60)
    setCanResend(false)
    inputsRef.current[0]?.focus()
  }

  const handleSubmit = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    onNavigate('reset-password')
  }

  const isComplete = otp.every((d) => d !== '')

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
            Verify OTP
          </h1>
          <p className="mt-1 text-sm font-body text-[#6B7280]/70 text-center">
            Enter the code sent to
          </p>
          <p className="text-sm font-medium text-[#1F2937]">{email || 'your email'}</p>
        </div>

        <div className="flex gap-2 sm:gap-3 justify-center mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { inputsRef.current[i] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-10 h-12 sm:w-12 sm:h-14 text-center text-base sm:text-lg font-heading font-bold text-[#1F2937] bg-white border border-[#E5E7EB] rounded-[14px] outline-none transition-all duration-300 focus:border-brand focus:ring-2 focus:ring-brand/10"
              aria-label={`Digit ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mb-6">
          {canResend ? (
            <button
              type="button"
              onClick={handleResend}
              className="text-sm text-brand hover:text-brand-hover font-medium transition-colors"
            >
              Resend OTP
            </button>
          ) : (
            <span className="text-sm text-[#6B7280]/60 font-body">
              Resend in <span className="text-brand font-medium">{timer}s</span>
            </span>
          )}
        </div>

        <Button variant="primary" onClick={handleSubmit} loading={loading} disabled={!isComplete}>
          Verify
        </Button>

        <button
          type="button"
          onClick={() => onNavigate('forgot-password')}
          className="mt-5 flex items-center justify-center gap-2 w-full text-sm text-[#6B7280]/60 font-body hover:text-brand transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      <p className="mt-5 text-center text-xs text-white/25 font-body">
        &copy; {new Date().getFullYear()} IFIN Global Group. All rights reserved.
      </p>
    </motion.div>
  )
}
