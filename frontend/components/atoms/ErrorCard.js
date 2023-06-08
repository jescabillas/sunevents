const ErrorCard = ({ message }) => {
  const errorMessages = {
    events: 'Unable to fetch events, please try again later.',
    event: 'Unable to fetch event, please try again later.',
    users: 'Unable to fetch users, please try again later.',
  }
  return (
    <div className='h-16 flex bg-red-400 rounded mx-2 items-center justify-center'>
      <span className='text-white w-full text-center '>
        {errorMessages[message]}
      </span>
    </div>
  )
}

export default ErrorCard
