const EventsContent = ({ children }) => {
  return (
    <div className='flex justify-center pt-6 pb-4 px-2.5 w-full md:px-8'>
      <div className='flex items-center h-full flex-col w-full md:max-w-xl gap-8'>
        <div className='flex flex-col gap-6 w-full'>{children}</div>
      </div>
    </div>
  )
}

export default EventsContent
