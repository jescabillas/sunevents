import Register from '@/pages/register'

const AuthInput = ({
  label,
  name,
  type = 'text',
  errorMessage,
  register,
  parentError,
}) => {
  const isError = errorMessage && errorMessage[0].length > 0
  const isParentError = parentError && parentError[0].length > 0

  return (
    <div className='flex flex-col gap-1 '>
      <label className='text-neutral-900'>{label}</label>
      <input
        type={type}
        {...register}
        className={`px-2 py-2 text-neutral-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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
  )
}

export default AuthInput
