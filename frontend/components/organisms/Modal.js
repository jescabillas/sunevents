import { createPortal } from 'react-dom'
import AuthSubmitButton from '../atoms/AuthSubmitButton'
import Icons from '../atoms/Icons'

const Modal = ({
  children,
  isOpen,
  submitBtn = <AuthSubmitButton>Submit</AuthSubmitButton>,
  modalHeader,
  onClose,
  formSubmit,
  error,
}) => {
  if (isOpen) {
    return createPortal(
      <div
        className='fixed flex items-center justify-center z-20 inset-0 bg-neutral-900 bg-opacity-10'
        onClick={onClose}
      >
        <div className='w-full px-5 md:max-w-xl md:px-0 drop-shadow-xl'>
          <div
            onClick={(e) => e.stopPropagation()}
            className='divide-y-2 divide-orange-500 w-full rounded p-2 bg-orange-50'
          >
            <div className='flex flex-row justify-between items-center text-neutral-900'>
              <div className='font-semibold text-lg p-2'>{modalHeader}</div>
              <button
                onClick={onClose}
                className='hover:bg-red-400 p-1 mr-1 rounded hover:text-white active:bg-red-500'
              >
                <Icons usage='close' />
              </button>
            </div>
            <form onSubmit={formSubmit}>
              <div className='w-full flex flex-col p-1'>
                {error && (
                  <span className='w-full text-sm text-center text-white bg-red-500 py-2 px-4 rounded-sm'>
                    {error}
                  </span>
                )}
                <div className='px-2 py-6'>{children}</div>
              </div>
              <div className='flex flex-row justify-end items-center p-2'>
                <div>{submitBtn}</div>
              </div>
            </form>
          </div>
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
}

export default Modal
