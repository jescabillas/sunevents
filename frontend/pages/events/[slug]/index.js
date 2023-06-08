import BackButton from '@/components/atoms/BackButton'
import EmptyResult from '@/components/atoms/EmptyResult'
import ErrorCard from '@/components/atoms/ErrorCard'
import LoadingRequest from '@/components/atoms/LoadingRequest'
import Event from '@/components/organisms/Event'
import EventContent from '@/components/templates/EventContent'
import EVENT from '@/helpers/graphql/query/EVENT'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const EventDetail = () => {
  const router = useRouter()
  const id = router.query.slug
  const {
    data: { event } = {},
    loading,
    error,
    refetch,
  } = useQuery(EVENT, { variables: { id } })

  return (
    <EventContent>
      <div className='w-full'>
        <BackButton />
      </div>
      {loading ? (
        <LoadingRequest />
      ) : error ? (
        <ErrorCard message='event' />
      ) : event ? (
        <Event
          id={event.id}
          date={event.event_date}
          title={event.title}
          description={event.description}
          hosts={event.hosts}
          user_id={event.user.id}
          attendants={event.attendants}
          refetch={refetch}
        />
      ) : (
        <EmptyResult message='event' />
      )}
    </EventContent>
  )
}

export default EventDetail
