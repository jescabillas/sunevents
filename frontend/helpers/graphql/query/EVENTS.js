import { gql } from '@apollo/client'

const EVENTS = gql`
  query Events($search: String, $from: String, $to: String) {
    events(search: $search, from: $from, to: $to) {
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

export default EVENTS
