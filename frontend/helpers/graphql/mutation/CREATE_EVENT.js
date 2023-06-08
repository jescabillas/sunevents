import { gql } from '@apollo/client'

const CREATE_EVENT = gql`
  mutation CreateEvent(
    $event_date: String
    $title: String
    $description: String
    $hosts: [ID]
  ) {
    createEvent(
      event_date: $event_date
      title: $title
      description: $description
      hosts: $hosts
    ) {
      id
      event_date
      title
      description
      hosts {
        id
        name
      }
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

export default CREATE_EVENT
