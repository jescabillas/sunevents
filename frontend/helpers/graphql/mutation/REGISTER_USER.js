import { gql } from '@apollo/client'

const REGISTER_USER = gql`
  mutation RegisterUser(
    $name: String
    $email: String
    $password: String
    $password_confirmation: String
  ) {
    registerUser(
      name: $name
      email: $email
      password: $password
      password_confirmation: $password_confirmation
    ) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export default REGISTER_USER
