import { gql } from '@apollo/client'

const ATTEND_EVENT = gql`
  mutation AttendEvent($id: ID) {
    attendEvent(id: $id)
  }
`

export default ATTEND_EVENT
