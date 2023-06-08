import ATTEND_EVENT from '@/helpers/graphql/mutation/ATTEND_EVENT'
import { useMutation } from '@apollo/client'
import { toast } from 'react-toastify'
import Icons from '../atoms/Icons'
import { useState } from 'react'

const attendText = ['Attend', 'Attending']

const AttendEvent = ({ id, isAttending, refetch }) => {
  const [attendEvent] = useMutation(ATTEND_EVENT)

  const onClickHandler = () => {
    attendEvent({ variables: { id } })
      .then((response) => {
        toast.success(response.data.attendEvent)
        refetch()
      })
      .catch((err) => {
        toast.error(err.graphQLErrors[0].message)
      })
  }

  const buttonStyle = isAttending
    ? 'bg-emerald-500 text-white hover:bg-emerald-400 active:bg-emerald-600'
    : 'bg-white text-neutral-700 hover:text-white hover:bg-emerald-400 active:bg-emerald-500 active:text-white'

  return (
    <button
      onClick={onClickHandler}
      className={`flex flex-row items-center pl-2 pr-3 py-1 gap-1 rounded-l-full ${buttonStyle}`}
    >
      <Icons usage='circle_plus' size='20' />
      <span className='font-semibold'>
        {isAttending ? 'Attending' : 'Attend'}
      </span>
    </button>
  )
}

export default AttendEvent
