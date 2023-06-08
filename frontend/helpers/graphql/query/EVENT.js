import { gql } from '@apollo/client'

const EVENT = gql`
  query Event($id: ID!) {
    event(id: $id) {
      id
      event_date
      title
      description
      hosts {
        id
        name
      }
      created_at
      updated_at
      user {
        id
        name
        email
      }
      attendants {
        id
        name
      }
    }
  }
`

export default EVENT
