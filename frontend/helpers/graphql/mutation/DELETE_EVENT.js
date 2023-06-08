import { gql } from '@apollo/client'

const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id)
  }
`

export default DELETE_EVENT
