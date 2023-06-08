import StickyNote from '../atoms/StickyNote'

const CompleteDate = ({ date, fullTime }) => {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-row drop-shadow-md'>
        <StickyNote
          label='Year'
          value={date.getFullYear()}
          color='blue'
          radPos='left'
        />
        <StickyNote
          label='Month'
          value={date.toLocaleString('default', {
            month: 'long',
          })}
          color='yellow'
        />
        <StickyNote label='Day' value={date.getDate()} color='emerald' />
        <StickyNote
          label='Time'
          value={date.toLocaleTimeString([], {
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
          })}
          color='red'
          radPos='right'
          valSize='text-xs md:text-lg'
        />
      </div>
    </div>
  )
}

export default CompleteDate
