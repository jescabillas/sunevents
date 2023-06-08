import Link from 'next/link'
import Icons from '../atoms/Icons'
import HostName from '../molecules/HostName'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import DeleteEvent from '../molecules/DeleteEvent'
import AttendEvent from '../molecules/AttendEvent'

const Event = ({
  id,
  date,
  title,
  description,
  hosts,
  user_id,
  attendants,
  refetch,
}) => {
  const { user } = useSelector((state) => state.persist.userToken)
  const router = useRouter()
  const current_date = new Date()
  date = new Date(date)

  return (
    <div className='flex flex-col gap-2 px-3 py-2 md:px-6 md:py-4 drop-shadow-md bg-red-400 rounded'>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full text-white'>
          <span className='text-xs md:text-sm font-light'>
            {date.getFullYear()}
          </span>
          <span className='font-semibold text-xl md:text-2xl'>
            {date.toLocaleString([], {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className='text-sm md:text-base'>
            {date.toLocaleTimeString([], {
              hour12: true,
              hour: 'numeric',
              minute: '2-digit',
            })}
          </span>
        </div>
        <div
          className={`flex flex-col items-end gap-1 ${
            user.id === user_id ? 'justify-between' : 'justify-end'
          }`}
        >
          {user.id === user_id && (
            <div className='flex flex-row gap-1'>
              <Link
                href={`/events/${router.query.slug}/edit`}
                className='text-white rounded-full p-2 hover:bg-white hover:text-neutral-900'
              >
                <Icons usage='square_pen' size='20' />
              </Link>
              <DeleteEvent id={id} />
            </div>
          )}
          {date.toLocaleDateString('en-CA') >=
            current_date.toLocaleDateString('en-CA') && (
            <div>
              <AttendEvent
                id={id}
                isAttending={attendants.some(
                  (attendant) => attendant.id === user.id
                )}
                refetch={refetch}
              />
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col gap-3 bg-orange-100 px-3 py-2 md:py-6 md:px-10'>
        <span className='text-xl md:text-2xl font-semibold text-orange-600'>
          {title}
        </span>
        <span className='text-neutral-900 text-sm md:text-base'>
          {description}
        </span>
        <div className='flex flex-col gap-2 border-t-2 border-orange-500 px-2 pt-2'>
          <div className='flex gap-1 items-start'>
            <div className='flex gap-2 items-center'>
              <div className='text-orange-600'>
                <Icons usage='microphone' size='20' />
              </div>
              <span className='text-sm text-neutral-600 min-w-max'>
                Hosted by
              </span>
            </div>
            <span className='text-sm'>
              {hosts.map((host, index) => (
                <Fragment key={index}>
                  <HostName name={host.name} />
                  {hosts.length === index + 1
                    ? ''
                    : hosts.length === index + 2
                    ? ' and '
                    : ', '}
                </Fragment>
              ))}
            </span>
          </div>
          <div className='flex flex-row gap-2 items-start'>
            <div className='text-orange-600'>
              <Icons usage='user_group' size='20' />
            </div>
            <span className='flex flex-row gap-1 items-baseline'>
              <span className='text-sm font-semibold text-neutral-900'>
                {attendants.length}
              </span>
              <span className='text-sm text-neutral-600'>
                participants attending
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
