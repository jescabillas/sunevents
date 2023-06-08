const FormTextarea = ({ label, errorMessage, register }) => {
  const isError = errorMessage && errorMessage[0].length > 0

  return (
    <div className='flex flex-col gap-1'>
      <label className='text-neutral-400 font-semibold text-sm'>{label}</label>
      <div className='flex flex-col'>
        <textarea
          {...register}
          className={`rounded p-2 resize-y text-sm text-neutral-900 drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isError ? 'border-2 border-red-600' : ''
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

export default FormTextarea
