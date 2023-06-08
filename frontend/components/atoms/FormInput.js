const FormInput = ({
  label,
  errorMessage,
  register,
  parentError,
  maxLength,
}) => {
  const isError = errorMessage && errorMessage[0].length > 0
  const isParentError = parentError && parentError[0].length > 0

  return (
    <div className='flex flex-col gap-1'>
      <label className='text-neutral-400 font-semibold text-sm'>{label}</label>
      <div className='flex flex-col'>
        <input
          type='text'
          maxLength={40}
          {...register}
          className={`rounded p-2 text-sm text-neutral-900 drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isError || isParentError ? 'border-2 border-red-600' : ''
          }`}
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

export default FormInput
