import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AuthLayout from './components/AuthLayout'
import LoginForm from './components/LoginForm'
import RequestAccessForm from './components/RequestAccessForm'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import OTPForm from './components/OTPForm'
import ResetPasswordForm from './components/ResetPasswordForm'
import SuccessPage from './components/SuccessPage'
import { type AuthPage } from './types'

export default function App() {
  const [page, setPage] = useState<AuthPage>('login')
  const [email, setEmail] = useState('')

  const renderForm = () => {
    switch (page) {
      case 'login':
        return <LoginForm key="login" onNavigate={setPage} />
      case 'request-access':
        return <RequestAccessForm key="request-access" onNavigate={setPage} />
      case 'forgot-password':
        return <ForgotPasswordForm key="forgot-password" onNavigate={setPage} setEmail={setEmail} />
      case 'otp':
        return <OTPForm key="otp" onNavigate={setPage} email={email} />
      case 'reset-password':
        return <ResetPasswordForm key="reset-password" onNavigate={setPage} />
      case 'success':
        return <SuccessPage key="success" onNavigate={setPage} />
    }
  }

  return (
    <AuthLayout>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 1.01 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="w-full flex justify-center"
        >
          {renderForm()}
        </motion.div>
      </AnimatePresence>
    </AuthLayout>
  )
}
