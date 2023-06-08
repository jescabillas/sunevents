import Flatpickr from 'react-flatpickr'

const DatePickerSearch = ({
  placeholder,
  defaultValue,
  onChange,
  minDate,
  maxDate,
}) => {
  return (
    <div className='w-1/2'>
      <Flatpickr
        data-enable-time
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        options={{
          enableTime: false,
          minDate: minDate,
          maxDate: maxDate,
          dateFormat: 'Y-m-d',
          altInput: true,
          altFormat: 'M j, Y',
          altInputClass: `border py-1 border-neutral-400 placeholder:text-sm cursor-default w-full text-center rounded-full placeholder:text-neutral-400 text-sm text-neutral-900 drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 `,
          disableMobile: true,
        }}
      />
    </div>
  )
}

export default DatePickerSearch
