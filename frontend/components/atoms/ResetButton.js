import Icons from './Icons'

const ResetButton = () => {
  return (
    <div className='flex items-center'>
      <button className='border hover:bg-orange-400 active:bg-orange-600 active:border-orange-600 active:text-white hover:text-white flex items-center text-orange-500 justify-center w-6 h-6 border-orange-400 bg-white rounded-full drop-shadow'>
        <Icons usage='refresh' size='15' />
      </button>
    </div>
  )
}

export default ResetButton
