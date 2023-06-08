import { useRouter } from 'next/router'
import Icons from './Icons'

const BackButton = ({ back }) => {
  const router = useRouter()

  return (
    <button
      onClick={back ?? (() => router.back())}
      className='text-neutral-900 rounded-full p-2 hover:bg-orange-300 active:bg-orange-300'
    >
      <Icons usage='arrow_left' />
    </button>
  )
}

export default BackButton
