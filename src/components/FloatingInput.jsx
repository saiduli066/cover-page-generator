import { forwardRef } from 'react'

const FloatingInput = forwardRef(function FloatingInput(
  { label, id, type = 'text', readOnly = false, ...props },
  ref
) {
  return (
    <div className="fl-group">
      <input
        ref={ref}
        id={id}
        type={type}
        placeholder={label}
        readOnly={readOnly}
        className="fl-input"
        autoComplete="off"
        {...props}
      />
      <label htmlFor={id} className="fl-label">
        {label}
      </label>
    </div>
  )
})

export default FloatingInput
