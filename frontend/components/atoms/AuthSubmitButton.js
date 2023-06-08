const getThemeColor = (theme) => {
  switch (theme) {
    case 'primary_red':
      return 'bg-red-500 text-white hover:drop-shadow hover:bg-red-400 active:bg-red-500 active:drop-shadow-none'
    default:
      return 'bg-orange-600 text-white drop-shadow hover:bg-orange-500 active:bg-orange-700 active:drop-shadow-none active:shadow-inner'
  }
}

const AuthSubmitButton = ({ isSubmitting, children, themeColor }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      <button
        type='submit'
        disabled={isSubmitting}
        className={`px-7 py-2 text-md rounded ${getThemeColor(themeColor)}`}
      >
        {children}
      </button>
    </div>
  )
}

export default AuthSubmitButton
