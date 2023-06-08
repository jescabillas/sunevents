import Flatpickr from 'react-flatpickr'

const DatePickerInput = ({ label, value, onChange, errorMessage }) => {
  const isError = errorMessage && errorMessage[0].length > 0

  return (
    <div className='flex flex-col gap-1'>
      <label className='text-neutral-400 font-semibold text-sm'>{label}</label>
      <div className='flex flex-col'>
        <Flatpickr
          key={isError}
          value={value}
          data-enable-time
          placeholder='Select Date..'
          onChange={onChange}
          options={{
            minDate: 'today',
            dateFormat: 'Y-m-d H:i',
            altInput: true,
            altFormat: 'F j, Y h:i K',
            altInputClass: `cursor-default rounded placeholder:text-neutral-400 p-2 text-sm text-neutral-900 drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isError ? 'border-2 border-red-600' : ''
            }`,
            disableMobile: true,
          }}
        />
        {isError &&
          errorMessage.map((error, index) => (
            <span key={index} className='text-sm text-red-600 px-2'>
              {error}
            </span>
          ))}
      </div>
    </div>
  )
}

export default DatePickerInput
