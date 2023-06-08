import Link from 'next/link'

const AddEventButton = () => {
  return (
    <Link
      href='/events/add'
      className='z-10 absolute self-end mr-1 md:mr-3 text-md md:text-lg font-semibold bottom-3 md:bottom-11 drop-shadow-xl px-3 py-2 bg-rose-500 text-white hover:bg-rose-600 active:ring ring-rose-600 flex items-center justify-center rounded'
    >
      Add Event
    </Link>
  )
}

export default AddEventButton
