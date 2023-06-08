import AuthInput from '@/components/atoms/AuthInput'
import AuthSubmitButton from '@/components/atoms/AuthSubmitButton'
import AuthCard from '@/components/templates/AuthCard'
import REGISTER_USER from '@/helpers/graphql/mutation/REGISTER_USER'
import { login } from '@/helpers/redux/userToken'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const initErrors = {
  header: '',
  validation: {
    name: [''],
    email: [''],
    password: [''],
  },
}

const Register = () => {
  const { isLoggedIn } = useSelector((state) => state.persist.userToken)
  const [registerUser] = useMutation(REGISTER_USER)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState(initErrors)
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()
  const router = useRouter()

  if (isLoggedIn) {
    router.replace('/')
  }

  const onSubmit = (data) => {
    setIsSubmitting(true)

    registerUser({
      variables: {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    })
      .then((response) => {
        dispatch(login(response.data.registerUser))

        setErrors(initErrors)
        reset()
        setIsSubmitting(false)

        router.replace('/')
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
    <AuthCard headerText='Sign-up' headerError={errors.header}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-3 bg-orange-200 px-6 py-8 md:px-16 md:py-11 rounded'
      >
        <AuthInput
          register={{ ...register('name') }}
          name='name'
          label='Name'
          errorMessage={errors.validation.name}
        />
        <AuthInput
          register={{ ...register('email') }}
          label='Email'
          name='email'
          errorMessage={errors.validation.email}
        />
        <AuthInput
          label='Password'
          type='password'
          name='password'
          register={{ ...register('password') }}
          errorMessage={errors.validation.password}
        />
        <AuthInput
          label='Confirm password'
          type='password'
          name='password_confirmation'
          register={{ ...register('password_confirmation') }}
          errorMessage={errors.validation.password_confirmation}
          parentError={errors.validation.password}
        />
        <div className='pt-4'>
          <AuthSubmitButton isSubmitting={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </AuthSubmitButton>
        </div>
      </form>
    </AuthCard>
  )
}

export default Register
