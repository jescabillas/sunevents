import AuthSubmitButton from '../atoms/AuthSubmitButton'

const FormCard = ({ children, headerText, headerError, isBack = false }) => {
  const isHeaderError = headerError && headerError.length > 0
  return (
    <div className='w-full md:max-w-xl gap-2 flex flex-col'>
      <span className='text-neutral-900 text-xl md:text-2xl font-bold px-3'>
        {headerText}
      </span>
      <div className='flex flex-col gap-3 bg-orange-100 px-6 py-6 md:px-16 md:py-6 rounded drop-shadow-md'>
        {isHeaderError && (
          <span className='w-full text-center text-white bg-red-500 py-3 rounded-sm drop-shadow-sm'>
            {headerError}
          </span>
        )}
        {children}
      </div>
    </div>
  )
}

export default FormCard
