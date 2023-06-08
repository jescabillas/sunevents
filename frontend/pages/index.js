import Link from 'next/link'
import { useEffect, useState } from 'react'
import EventCard from '@/components/organisms/EventCard'
import { useSelector } from 'react-redux'
import EventsContent from '@/components/templates/EventsContent'
import CompleteDate from '@/components/molecules/CompleteDate'
import AddEventButton from '@/components/atoms/AddEventButton'
import { useQuery } from '@apollo/client'
import ErrorCard from '@/components/atoms/ErrorCard'
import LoadingRequest from '@/components/atoms/LoadingRequest'
import EVENTS_TODAY from '@/helpers/graphql/query/EVENTS_TODAY'
import EmptyResult from '@/components/atoms/EmptyResult'

export default function Home() {
  const { isLoggedIn } = useSelector((state) => state.persist.userToken)
  const [time, setTime] = useState(new Date())
  const [today, setToday] = useState()
  const {
    data: { eventsToday } = {},
    loading,
    error,
    refetch,
  } = useQuery(EVENTS_TODAY, {
    variables: {
      today: time.toLocaleDateString('en-CA'),
    },
  })

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  useEffect(() => {
    if (today?.getDay() !== time.getDay()) {
      setToday(time)
      refetch({ today: time.toLocaleDateString('en-CA') })
    }
  }, [time])

  return (
    <EventsContent>
      <CompleteDate date={time} />
      <div className='flex flex-col gap-2.5 w-full'>
        <div
          className={`flex flex-row justify-between border-orange-500 ${
            eventsToday ? '' : 'border-b-2'
          }`}
        >
          <span className='font-semibold text-md md:text-lg flex items-center text-neutral-900'>
            Events today
          </span>
          <Link
            href='/events'
            className='hover:text-blue-700 text-sm md:text-base text-neutral-900 flex items-center'
          >
            See all events
          </Link>
        </div>
        {isLoggedIn && <AddEventButton />}
        {loading ? (
          <LoadingRequest />
        ) : error ? (
          <ErrorCard message='events' />
        ) : eventsToday.length > 0 ? (
          eventsToday.map((event, index) => (
            <EventCard
              key={index}
              id={event.id}
              date={event.event_date}
              title={event.title}
              description={event.description}
              hosts={event.hosts}
            />
          ))
        ) : (
          <EmptyResult message='eventsToday' />
        )}
      </div>
    </EventsContent>
  )
}
