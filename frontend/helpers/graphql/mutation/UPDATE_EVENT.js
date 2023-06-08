import { gql } from '@apollo/client'

const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $id: ID
    $event_date: String
    $title: String
    $description: String
    $hosts: [ID]
  ) {
    updateEvent(
      id: $id
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

export default UPDATE_EVENT
