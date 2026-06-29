import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { type AuthFormProps } from '../types'

export default function SuccessPage({ onNavigate }: AuthFormProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-[460px]"
    >
      <div className="login-card p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col items-center text-center">
          <Logo />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="mt-8 mb-6"
          >
            <CheckCircle2 size={64} className="text-green-500" />
          </motion.div>

          <h1 className="text-2xl font-heading font-bold text-[#1F2937] mb-2">
            Password Updated
          </h1>
          <p className="text-sm font-body text-[#6B7280]/70 mb-8 max-w-sm">
            Your password has been successfully updated. You can now sign in with your new password.
          </p>

          <Button variant="primary" onClick={() => onNavigate('login')}>
            Return to Sign In
          </Button>
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-white/25 font-body">
        &copy; {new Date().getFullYear()} IFIN Global Group. All rights reserved.
      </p>
    </motion.div>
  )
}
