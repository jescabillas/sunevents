import { useSelector } from 'react-redux'
import BackButton from '@/components/atoms/BackButton'
import EventForm from '@/components/organisms/EventForm'
import { useRouter } from 'next/router'

const AddEvent = () => {
  const { isLoggedIn } = useSelector((state) => state.persist.userToken)
  const router = useRouter()

  if (!isLoggedIn) {
    router.back()
  }

  return (
    <div className='w-full flex flex-col items-center py-6 px-2.5 md:px-0 gap-3'>
      <div className='w-full md:max-w-xl'>
        <BackButton />
      </div>
      <EventForm />
    </div>
  )
}

export default AddEvent
