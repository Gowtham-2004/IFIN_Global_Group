import { useState } from 'react'
import { type InputFieldProps } from '../types'

export default function InputField({
  label,
  type = 'text',
  icon: Icon,
  value,
  onChange,
  error,
  required = false,
  name,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value.length > 0
  const isActive = isFocused || hasValue

  return (
    <div className="relative mb-5">
      <div
        className={[
          'relative flex items-center rounded-[14px] border transition-all duration-300 bg-white',
          isFocused ? 'border-brand ring-2 ring-brand/10' : 'border-[#E5E7EB]',
          error ? 'border-red-400 ring-2 ring-red-100' : '',
        ].join(' ')}
        style={{ height: '54px' }}
      >
        {Icon && (
          <div className="pl-4 text-[#6B7280]/50 transition-colors duration-300">
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          aria-label={label}
          aria-required={required}
          aria-invalid={!!error}
          className={[
            'w-full bg-transparent outline-none text-[#1F2937] text-sm font-body h-full',
            'placeholder-transparent',
            Icon ? 'px-3' : 'px-4',
          ].join(' ')}
          placeholder={label}
          id={`field-${name}`}
        />
        <label
          htmlFor={`field-${name}`}
          className={[
            'absolute left-0 font-body text-sm transition-all duration-300 pointer-events-none select-none',
            Icon ? 'pl-[42px]' : 'pl-4',
            isActive
              ? '-top-2.5 text-[11px] text-brand'
              : 'top-1/2 -translate-y-1/2 text-[#6B7280]/50',
          ].join(' ')}
        >
          {label}
          {required && <span className="text-brand ml-0.5">*</span>}
        </label>
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-body pl-1" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
