import { Fragment, useState } from 'react'
import Icons from '../atoms/Icons'
import Modal from '../organisms/Modal'
import AuthSubmitButton from '../atoms/AuthSubmitButton'
import { useMutation } from '@apollo/client'
import DELETE_EVENT from '@/helpers/graphql/mutation/DELETE_EVENT'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const DeleteEvent = ({ id }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [errors, setErrors] = useState()
  const [deleteEvent] = useMutation(DELETE_EVENT)
  const router = useRouter()

  const submitHander = (e) => {
    e.preventDefault()
    setErrors('')

    deleteEvent({ variables: { id } })
      .then((response) => {
        toast.success(response.data.deleteEvent)
        setModalOpen(false)
        router.replace('/events')
      })
      .catch((err) => {
        setErrors(err.graphQLErrors[0].message)
      })
  }

  return (
    <Fragment>
      <button
        onClick={() => setModalOpen(true)}
        className='text-white rounded-full p-2 hover:bg-white hover:text-neutral-900'
      >
        <Icons usage='trash' size='20' />
      </button>
      <Modal
        modalHeader='Confirm Delete'
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        formSubmit={submitHander}
        error={errors}
        submitBtn={
          <AuthSubmitButton themeColor='primary_red'>Delete</AuthSubmitButton>
        }
      >
        Are you sure you want to delete this event?
      </Modal>
    </Fragment>
  )
}

export default DeleteEvent
