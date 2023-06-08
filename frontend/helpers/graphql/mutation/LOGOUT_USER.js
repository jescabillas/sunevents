import { gql } from '@apollo/client'

const LOGOUT_USER = gql`
  mutation LogoutUser {
    logoutUser
  }
`

export default LOGOUT_USER
