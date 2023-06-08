import { gql } from '@apollo/client'

const LOGIN_USER = gql`
  mutation LoginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export default LOGIN_USER
