import { type LucideIcon } from 'lucide-react'

interface InputFieldProps {
  label: string
  type: string
  icon?: LucideIcon
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
  name: string
  placeholder?: string
  suffix?: React.ReactNode
}

export default function InputField({
  label,
  type = 'text',
  icon: Icon,
  value,
  onChange,
  error,
  required = false,
  name,
  placeholder,
  suffix,
}: InputFieldProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor={`field-${name}`}
        className="block text-sm font-medium text-[#1F2937] mb-1.5"
      >
        {label}
        {required && <span className="text-brand ml-0.5">*</span>}
      </label>
      <div
        className={[
          'flex items-center rounded-[14px] border transition-all duration-300 bg-white',
          error ? 'border-red-400 ring-2 ring-red-100' : 'border-[#E5E7EB] focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/10',
        ].join(' ')}
        style={{ height: '54px' }}
      >
        {Icon && (
          <div className="pl-4 flex items-center justify-center text-[#6B7280]/50">
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-label={label}
          aria-required={required}
          aria-invalid={!!error}
          placeholder={placeholder || label}
          id={`field-${name}`}
          className={[
            'w-full bg-transparent outline-none text-[#1F2937] text-sm font-body h-full',
            Icon ? 'pl-3' : 'pl-4',
            suffix ? 'pr-3' : 'pr-4',
            'placeholder:text-[#6B7280]/40',
          ].join(' ')}
        />
        {suffix && (
          <div className="pr-2 flex items-center justify-center">
            {suffix}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500 font-body" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
