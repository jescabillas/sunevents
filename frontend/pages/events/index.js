import { useQuery } from '@apollo/client'
import EVENTS from '@/helpers/graphql/query/EVENTS'
import EventCard from '@/components/organisms/EventCard'
import { useSelector } from 'react-redux'
import EventsContent from '@/components/templates/EventsContent'
import AddEventButton from '@/components/atoms/AddEventButton'
import Events from '@/components/templates/Events'
import LoadingRequest from '@/components/atoms/LoadingRequest'
import ErrorCard from '@/components/atoms/ErrorCard'
import EventSearch from '@/components/organisms/EventSearch'
import EmptyResult from '@/components/atoms/EmptyResult'

const dateRange = {
  from: new Date().toLocaleDateString('en-CA'),
  to: new Date(
    new Date().setDate(new Date().getDate() + 10)
  ).toLocaleDateString('en-CA'),
}

const EventsList = () => {
  const { isLoggedIn } = useSelector((state) => state.persist.userToken)
  const {
    data: { events } = {},
    loading,
    error,
    refetch,
  } = useQuery(EVENTS, {
    variables: dateRange,
    notifyOnNetworkStatusChange: true,
  })

  return (
    <div className='flex flex-col items-center'>
      <EventSearch
        date={dateRange}
        refetch={refetch}
        errorMessage={error?.graphQLErrors[0]?.message}
      />
      <EventsContent>
        <Events>
          {isLoggedIn && <AddEventButton />}
          {loading ? (
            <LoadingRequest />
          ) : error ? (
            <ErrorCard message='events' />
          ) : events.length > 0 ? (
            events?.map((event, index) => (
              <EventCard
                key={index}
                id={event.id}
                date={new Date(event.event_date)}
                title={event.title}
                description={event.description}
                hosts={event.hosts}
              />
            ))
          ) : (
            <EmptyResult message='events' />
          )}
        </Events>
      </EventsContent>
    </div>
  )
}

export default EventsList
