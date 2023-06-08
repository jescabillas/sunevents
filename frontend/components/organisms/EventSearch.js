import { useState } from 'react'
import DatePickerSearch from '../atoms/DatePickerSearch'
import ResetButton from '../atoms/ResetButton'

const getResutMessage = (search, from, to) => {
  return `Showing results ${search ? `for "${search}"` : ''} ${
    from && to ? `from "${from}" to "${to}"` : ''
  }`
}

const EventSearch = ({ date, refetch, errorMessage }) => {
  const [dateRange, setDateRange] = useState(date)
  const [search, setSearch] = useState('')
  const [resultsMessage, setResultMessage] = useState(
    getResutMessage(search, dateRange.from, dateRange.to)
  )

  const onChangeFrom = (selectedDate) => {
    setDateRange({
      ...dateRange,
      from: selectedDate[0]?.toLocaleDateString('en-CA'),
    })
  }

  const onChangeTo = (selectedDate) => {
    setDateRange({
      ...dateRange,
      to: selectedDate[0]?.toLocaleDateString('en-CA'),
    })
  }

  const onClickSearch = (e) => {
    e.preventDefault()

    refetch({ search, from: dateRange.from, to: dateRange.to })
    setResultMessage(getResutMessage(search, dateRange.from, dateRange.to))
  }

  return (
    <div className='flex gap-4 flex-col w-full md:max-w-2xl px-2 pt-6'>
      <div className='flex flex-col gap-2'>
        {errorMessage && (
          <span className='w-full text-center text-white bg-red-500 py-2 text-sm rounded-sm drop-shadow-sm'>
            {errorMessage}
          </span>
        )}
        <div className=' flex flex-row gap-3 justify-between'>
          <div className='flex flex-col w-[calc(100%-76px)] md:flex-row gap-1 md:gap-3'>
            <div className='flex flex-row gap-1 w-full md:w-3/5'>
              <div className='flex items-center w-full'>
                <input
                  type='text'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Type here..'
                  className='text-sm w-full placeholder:text-sm border drop-shadow-sm border-neutral-400 px-2 py-1 rounded-full'
                />
              </div>
            </div>
            <div className='flex flex-row w-full md:w-2/5 gap-1 items-center'>
              <DatePickerSearch
                placeholder='From'
                defaultValue={dateRange.from}
                maxDate={dateRange.to}
                onChange={onChangeFrom}
              />
              <span className='w-2.5 flex justify-center items-center'>-</span>
              <DatePickerSearch
                placeholder='To'
                defaultValue={dateRange.to}
                minDate={dateRange.from}
                onChange={onChangeTo}
              />
            </div>
          </div>

          <div className='flex items-center w-16'>
            <button
              onClick={onClickSearch}
              className='hover:bg-orange-400 active:bg-orange-500 py-1 bg-orange-500 drop-shadow w-full text-md text-white rounded font-semibold'
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <span className='text-md text-neutral-900'>{resultsMessage}</span>
    </div>
  )
}

export default EventSearch
