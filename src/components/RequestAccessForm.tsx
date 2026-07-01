import { useState, useCallback, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Phone, Building2, Briefcase, FileText, ArrowLeft, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import InputField from './InputField'
import Button from './Button'
import { type AuthFormProps } from '../types'

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  organization: string
  department: string
  jobTitle: string
  reason: string
}

const stepVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
}

export default function RequestAccessForm({ onNavigate }: AuthFormProps) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', phone: '',
    organization: '', department: '', jobTitle: '', reason: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const canProceed = form.firstName.trim() && form.lastName.trim() && form.email.trim()

  const handleNext = useCallback(() => {
    if (!canProceed) return
    setStep(2)
  }, [canProceed])

  const handleBack = useCallback(() => setStep(1), [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 2000))
    setLoading(false)
    onNavigate('login')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-[460px]"
    >
      <div className="login-card p-6 sm:p-8">
        <div className="flex flex-col items-center mb-5">
          <Logo />
          <h1 className="mt-5 text-2xl font-heading font-bold text-[#1F2937]">
            Request Access
          </h1>
          <p className="mt-1 text-sm font-body text-[#6B7280]/70">
            Submit your details for account approval
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${step >= 1 ? 'bg-brand' : 'bg-[#E5E7EB]'}`} />
          <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${step >= 2 ? 'bg-brand' : 'bg-[#E5E7EB]'}`} />
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <div className="grid gap-0 sm:grid-cols-2 sm:gap-3">
                  <div className="min-w-0">
                    <InputField label="First Name" type="text" name="firstName" icon={User} value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="min-w-0">
                    <InputField label="Last Name" type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <InputField label="Company Email" type="email" name="email" icon={Mail} value={form.email} onChange={handleChange} required />
                <InputField label="Phone Number" type="tel" name="phone" icon={Phone} value={form.phone} onChange={handleChange} />

                <Button variant="primary" type="button" onClick={handleNext} icon={<ArrowRight size={18} />}>
                  Next
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <InputField label="Organization" type="text" name="organization" icon={Building2} value={form.organization} onChange={handleChange} required />
                <InputField label="Department" type="text" name="department" icon={Briefcase} value={form.department} onChange={handleChange} />
                <InputField label="Job Title" type="text" name="jobTitle" value={form.jobTitle} onChange={handleChange} />

                <div className="mb-5">
                  <label htmlFor="field-reason" className="block text-sm font-medium text-[#1F2937] mb-1.5">
                    Reason for Access <span className="text-brand">*</span>
                  </label>
                  <div className="flex items-start rounded-[14px] border border-[#E5E7EB] transition-all duration-300 bg-white focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/10">
                    <div className="pl-4 pt-[15px] text-[#6B7280]/50">
                      <FileText size={18} />
                    </div>
                    <textarea
                      name="reason"
                      id="field-reason"
                      value={form.reason}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full bg-transparent outline-none text-[#1F2937] text-sm font-body p-3 placeholder:text-[#6B7280]/40 resize-none"
                      placeholder="Tell us why you need access"
                    />
                  </div>
                </div>

                <Button variant="primary" type="submit" loading={loading}>
                  Create Request
                </Button>

                <button
                  type="button"
                  onClick={handleBack}
                  className="mt-3 flex items-center justify-center gap-2 w-full text-sm text-[#6B7280]/60 font-body hover:text-brand transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <p className="mt-4 text-center text-sm text-[#6B7280]/60 font-body">
          Already have an account?{' '}
          <button type="button" onClick={() => onNavigate('login')} className="text-brand hover:text-brand-hover font-medium transition-colors">
            Sign In
          </button>
        </p>
      </div>

      <p className="mt-4 text-center text-xs text-white/25 font-body">
        &copy; {new Date().getFullYear()} IFIN Global Group. All rights reserved.
      </p>
    </motion.div>
  )
}
