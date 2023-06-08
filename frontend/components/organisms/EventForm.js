import { Controller, useForm } from 'react-hook-form'
import DatePickerInput from '../atoms/DatePickerInput'
import FormCard from '../templates/FormCard'
import FormInput from '../atoms/FormInput'
import MultiSelectInput from '../atoms/MultiSelectInput'
import AuthSubmitButton from '../atoms/AuthSubmitButton'
import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import CREATE_EVENT from '@/helpers/graphql/mutation/CREATE_EVENT'
import USERS from '@/helpers/graphql/query/USERS'
import { useRouter } from 'next/router'
import FormTextarea from '../atoms/FormTextarea'
import UPDATE_EVENT from '@/helpers/graphql/mutation/UPDATE_EVENT'
import { toast } from 'react-toastify'
import { getMessages } from '@/helpers/getMessages'

const initErrors = {
  header: '',
  validation: {
    event_date: [''],
    title: [''],
    description: [''],
    hosts: [''],
  },
}

const EventForm = ({ event }) => {
  const [createEvent] = useMutation(CREATE_EVENT)
  const [updateEvent] = useMutation(UPDATE_EVENT)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState(initErrors)
  const { data: { users } = {} } = useQuery(USERS)
  const router = useRouter()

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      event_date: [event?.event_date],
      title: event?.title,
      description: event?.description,
      hosts: event?.hosts.map((host) => ({ value: host.id, label: host.name })),
    },
  })

  const userOptions = users?.map((user) => ({
    value: user.id,
    label: user.name,
  }))

  const onSubmit = (data) => {
    setIsSubmitting(true)
    const eventMessages = getMessages.event

    const eventMutatation = event
      ? updateEvent({
          variables: {
            id: event.id,
            event_date: data.event_date ? data.event_date[0] : '',
            title: data.title,
            description: data.description,
            hosts:
              data.hosts?.length > 0
                ? data.hosts?.map((host) => Number(host.value))
                : '',
          },
        })
      : createEvent({
          variables: {
            event_date: data.event_date ? data.event_date[0] : '',
            title: data.title,
            description: data.description,
            hosts:
              data.hosts?.length > 0
                ? data.hosts?.map((host) => Number(host.value))
                : '',
          },
        })

    eventMutatation
      .then((response) => {
        toast.success(event ? eventMessages.update : eventMessages.create)
        setErrors(initErrors)
        reset()
        setIsSubmitting(false)

        router.replace(
          `/events/${
            event ? response.data.updateEvent.id : response.data.createEvent.id
          }`
        )
      })
      .catch((err) => {
        const validation = err.graphQLErrors[0].extensions.validation

        if (validation) {
          setErrors({
            ...errors,
            validation: validation,
            header: initErrors.header,
          })
        } else {
          setErrors({
            ...errors,
            header: err.graphQLErrors[0].message,
            validation: initErrors.validation,
          })
        }

        setIsSubmitting(false)
      })
  }

  return (
    <FormCard
      headerError={errors.header}
      headerText={event ? 'Edit Event' : 'Add Event'}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-2 w-full'
      >
        <Controller
          control={control}
          name='event_date'
          render={({ field: { value, onChange } }) => (
            <DatePickerInput
              label='Date'
              value={value}
              onChange={(currentdateString) => onChange(currentdateString)}
              errorMessage={errors.validation.event_date}
            />
          )}
        />
        <FormInput
          label='Title'
          maxLength={40}
          register={{ ...register('title') }}
          errorMessage={errors.validation.title}
        />
        <FormTextarea
          label='Description'
          register={{ ...register('description') }}
          errorMessage={errors.validation.description}
        />
        <Controller
          control={control}
          name='hosts'
          render={({ field: { value, onChange } }) => (
            <MultiSelectInput
              label='Hosts'
              value={value}
              onChange={onChange}
              errorMessage={errors.validation.hosts}
              options={userOptions}
              placeholder='Select Hosts..'
              noOptionsMessage='No users found'
            />
          )}
        />
        <div className='pt-4'>
          <AuthSubmitButton isSubmitting={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </AuthSubmitButton>
        </div>
      </form>
    </FormCard>
  )
}

export default EventForm
