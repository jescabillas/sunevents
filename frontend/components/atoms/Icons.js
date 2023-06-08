import {
  HiArrowLeft,
  HiMicrophone,
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiPlus,
  HiPlusCircle,
  HiUserGroup,
  HiX,
} from 'react-icons/hi'
import { MdRefresh } from 'react-icons/md'

const Icons = ({ usage, size = '24', additionalClass }) => {
  switch (usage) {
    case 'plus':
      return <HiPlus size={size} className={`${additionalClass}`} />
    case 'circle_plus':
      return <HiPlusCircle size={size} className={`${additionalClass}`} />
    case 'refresh':
      return <MdRefresh size={size} className={`${additionalClass}`} />
    case 'arrow_left':
      return <HiArrowLeft size={size} className={`${additionalClass}`} />
    case 'trash':
      return <HiOutlineTrash size={size} className={`${additionalClass}`} />
    case 'square_pen':
      return <HiOutlinePencilAlt size={size} className={`${additionalClass}`} />
    case 'close':
      return <HiX size={size} className={`${additionalClass}`} />
    case 'user_group':
      return <HiUserGroup size={size} className={`${additionalClass}`} />
    case 'microphone':
      return <HiMicrophone size={size} className={`${additionalClass}`} />
    default:
      return
  }
}

export default Icons
