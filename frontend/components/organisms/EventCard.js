import Link from 'next/link'
import HostName from '../molecules/HostName'

const EventCard = ({ id, title, description, hosts, date }) => {
  date = new Date(date)

  return (
    <div className='w-full bg-orage-300 h-32 bg-orange-200 rounded flex flex-row drop-shadow'>
      <div className='w-[73px] md:w-20 flex flex-col items-center h-full p-2'>
        <div className='w-full flex flex-col items-center bg-white text-neutral-900 rounded-t border-x border-t border-neutral-400 justify-between h-1/2'>
          <span className='text-xs font-semibold'>{date.getFullYear()}</span>
          <span className='flex items-center grow font-semibold text-xl md:text-2xl'>
            {date.toLocaleString('default', {
              month: 'short',
            })}
          </span>
        </div>
        <div className='w-full flex flex-col items-center text-white bg-red-500 rounded-b border-x border-b border-red-500 justify-between h-1/2'>
          <span className='font-bold text-2xl md:text-3xl flex items-center grow'>
            {date.getDate()}
          </span>
          <span className='text-xs'>
            {date.toLocaleTimeString([], {
              hour12: true,
              hour: 'numeric',
              minute: '2-digit',
            })}
          </span>
        </div>
      </div>
      <div className='w-[calc(100%-73px)] md:w-[calc(100%-80px)] pl-0 md:pl-2.5 p-2.5 justify-between flex flex-col text-neutral-900 gap-1'>
        <div className='flex flex-col gap-1'>
          <span>
            <Link
              href={`/events/${id}`}
              className='text-sm md:text-lg font-semibold hover:text-blue-700'
            >
              {title}
            </Link>
          </span>
          <span className='text-xs md:text-sm text-neutral-700 overflow-hidden line-clamp-2'>
            {description}
          </span>
        </div>
        <div className='text-xs md:text-sm flex flex-row gap-1'>
          <span className='text-xs md:text-sm text-neutral-600 min-w-max'>
            Hosted by
          </span>
          {hosts.length > 2 ? (
            <span>
              <HostName link='#' name={hosts[0].name} /> and{' '}
              <span className='text-neutral-900 font-semibold'>
                {hosts.length - 1} others
              </span>
            </span>
          ) : hosts.length == 2 ? (
            <span>
              <HostName link='#' name={hosts[0].name} /> and{' '}
              <HostName link='#' name={hosts[1].name} />
            </span>
          ) : hosts.length == 1 ? (
            <span>
              <HostName link='#' name={hosts[0].name} />
            </span>
          ) : (
            <span className='text-sm text-neutral-900'>None</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventCard
