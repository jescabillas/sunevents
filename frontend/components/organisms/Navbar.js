import Link from 'next/link'
import { useRouter } from 'next/router'
import NavbarButton from '../atoms/NavbarButton'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@apollo/client'
import LOGOUT_USER from '@/helpers/graphql/mutation/LOGOUT_USER'
import { logout } from '@/helpers/redux/userToken'

const Navbar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.persist.userToken)
  const [logoutUser] = useMutation(LOGOUT_USER)

  const logoutHandler = () => {
    logoutUser().then((response) => {
      dispatch(logout())
      router.replace('/')
    })
  }

  return (
    <section className='w-full h-14 items-center flex px-3 justify-between md:px-20 flex-row bg-orange-400 drop-shadow'>
      <Link href='/' className='font-semibold text-2xl text-neutral-900'>
        Sunevents
      </Link>

      <div className='flex flex-row divide-x divide-orange-200 text-sm text-neutral-900'>
        {router.pathname !== '/login' && !isLoggedIn && (
          <NavbarButton linkTo='/login'>Login</NavbarButton>
        )}
        {router.pathname !== '/register' && !isLoggedIn && (
          <NavbarButton linkTo='/register'>Register</NavbarButton>
        )}
        {isLoggedIn && (
          <NavbarButton onClick={logoutHandler}>Logout</NavbarButton>
        )}
      </div>
    </section>
  )
}

export default Navbar
