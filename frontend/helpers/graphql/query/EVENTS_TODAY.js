import { gql } from '@apollo/client'

const EVENTS_TODAY = gql`
  query EventsToday($today: String) {
    eventsToday(today: $today) {
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

export default EVENTS_TODAY
