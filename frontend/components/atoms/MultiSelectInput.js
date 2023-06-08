import Select from 'react-select'

const MultiSelectInput = ({
  label,
  options,
  value,
  onChange,
  noOptionsMessage,
  placeholder,
  errorMessage,
}) => {
  const isError = errorMessage && errorMessage[0].length > 0

  const selectHostStyle = {
    control: (styles, { isFocused }) => ({
      ...styles,
      border: isError ? '2px solid rgb(220 38 38)' : '0px',
      boxShadow: isFocused ? ' 0 0 0 2px rgb(59 130 246)' : '',
      filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
      ':hover': { border: isError ? '2px solid rgb(220 38 38)' : '0px' },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: 'rgb(163 163 163)',
      fontSize: '0.875rem',
      lineheight: '1.25rem',
    }),
  }

  return (
    <div className='flex flex-col gap-1'>
      <label className='text-neutral-400 font-semibold text-sm'>{label}</label>
      <div className='flex flex-col'>
        <Select
          options={options}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isClearable={true}
          isMulti
          styles={selectHostStyle}
          noOptionsMessage={() => noOptionsMessage}
        />
        {isError &&
          errorMessage.map((error, index) => (
            <span key={index} className='text-sm text-red-600 px-2'>
              {error}
            </span>
          ))}
      </div>
    </div>
  )
}

export default MultiSelectInput
