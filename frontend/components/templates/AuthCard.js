const AuthCard = ({ children, headerText, headerError }) => {
  const isHeaderError = headerError && headerError.length > 0
  return (
    <div className='w-full flex justify-center'>
      <div
        className={`w-full md:max-w-xl px-2.5 md:px-0 gap-2 flex flex-col ${
          isHeaderError ? 'py-5' : 'py-10'
        }`}
      >
        {isHeaderError && (
          <span className='w-full text-center text-white bg-red-500 py-3 rounded-sm'>
            {headerError}
          </span>
        )}
        <span className='text-neutral-900 text-2xl font-bold px-3'>
          {headerText}
        </span>
        {children}
      </div>
    </div>
  )
}

export default AuthCard
