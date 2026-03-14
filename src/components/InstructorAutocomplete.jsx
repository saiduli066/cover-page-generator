import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { instructors } from '../data/instructors'

const InstructorAutocomplete = forwardRef(function InstructorAutocomplete(
  { value, onChange, onDesignationSelect },
  ref
) {
  const [isOpen, setIsOpen] = useState(false)
  const [filtered, setFiltered] = useState([])
  const wrapperRef = useRef(null)
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => inputRef.current)

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleChange(e) {
    const val = e.target.value
    onChange(val)
    if (val.length >= 1) {
      const matches = instructors.filter((i) =>
        i.name.toLowerCase().includes(val.toLowerCase())
      )
      setFiltered(matches)
      setIsOpen(matches.length > 0)
    } else {
      setIsOpen(false)
    }
  }

  function handleSelect(instructor) {
    onChange(instructor.name)
    onDesignationSelect(instructor.designation)
    setIsOpen(false)
  }

  function handleFocus() {
    if (value && value.length >= 1) {
      const matches = instructors.filter((i) =>
        i.name.toLowerCase().includes(value.toLowerCase())
      )
      if (matches.length > 0) {
        setFiltered(matches)
        setIsOpen(true)
      }
    }
  }

  return (
    <div ref={wrapperRef} className="fl-group" style={{ position: 'relative' }}>
      <input
        ref={inputRef}
        id="instructorName"
        type="text"
        placeholder="Instructor Name"
        className="fl-input"
        autoComplete="off"
        value={value || ''}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <label htmlFor="instructorName" className="fl-label">
        Instructor Name
      </label>

      {isOpen && filtered.length > 0 && (
        <div className="ac-dropdown">
          {filtered.map((instructor, idx) => (
            <div
              key={idx}
              className="ac-item"
              onClick={() => handleSelect(instructor)}
            >
              <div style={{ fontWeight: 500 }}>{instructor.name}</div>
              <div className="desg">{instructor.designation}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
})

export default InstructorAutocomplete
