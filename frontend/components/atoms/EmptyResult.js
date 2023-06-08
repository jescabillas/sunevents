const EmptyResult = ({ message, height = 'h-32' }) => {
  const messageText = {
    event: 'No event found.',
    events: 'No events found.',
    eventsToday: 'No event for today.',
  }
  return (
    <div className={`${height} w-full  flex items-center justify-center`}>
      <span className='text-orange-500 font-semibold'>
        {messageText[message]}
      </span>
    </div>
  )
}

export default EmptyResult
