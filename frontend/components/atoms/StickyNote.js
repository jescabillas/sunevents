const StickyNote = ({ label, value, color = 'blue', radPos, valSize }) => {
  const colorPalette = {
    blue: ['bg-blue-500', 'bg-blue-400'],
    yellow: ['bg-yellow-500', 'bg-yellow-300'],
    red: ['bg-red-500', 'bg-red-400'],
    emerald: ['bg-emerald-500', 'bg-emerald-400'],
  }

  const radius = {
    left: ['rounded-tl-sm md:rounded-tl', 'rounded-bl-sm md:rounded-bl'],
    right: ['rounded-tr-sm md:rounded-tr', 'rounded-br-sm md:rounded-br'],
  }

  return (
    <div className='w-20 md:w-32 h-20 md:h-32 flex flex-col'>
      <span
        className={`${colorPalette[color][0]} ${
          radPos ? radius[radPos][0] : ''
        } text-xs md:text-sm font-semibold flex justify-center py-1 text-white`}
      >
        {label}
      </span>
      <span
        className={`${colorPalette[color][1]} ${
          radPos ? radius[radPos][1] : ''
        } ${
          valSize ? valSize : 'text-2xl md:text-4xl'
        } grow flex items-center text-white  font-bold justify-center`}
      >
        {value}
      </span>
    </div>
  )
}

export default StickyNote
