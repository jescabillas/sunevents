import { useSelector } from 'react-redux'
import BackButton from '@/components/atoms/BackButton'
import EventForm from '@/components/organisms/EventForm'
import { useQuery } from '@apollo/client'
import EVENT from '@/helpers/graphql/query/EVENT'
import LoadingRequest from '@/components/atoms/LoadingRequest'
import ErrorCard from '@/components/atoms/ErrorCard'
import { useRouter } from 'next/router'

const EditEvent = () => {
  const { isLoggedIn, user } = useSelector((state) => state.persist.userToken)
  const router = useRouter()
  const {
    data: { event } = {},
    loading,
    error,
  } = useQuery(EVENT, { variables: { id: router.query.slug } })

  if (!isLoggedIn || user.id !== event?.user.id) {
    router.back()
  }

  return (
    <div className='w-full flex flex-col items-center py-6 px-2.5 md:px-0 gap-3'>
      <div className='w-full md:max-w-xl'>
        <BackButton />
      </div>
      {loading ? (
        <LoadingRequest />
      ) : error ? (
        <ErrorCard message='event' />
      ) : (
        <EventForm event={event} />
      )}
    </div>
  )
}

export default EditEvent
