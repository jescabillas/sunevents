import Link from 'next/link'

const NavbarButton = ({ linkTo, children, onClick }) => {
  const buttonClass =
    'px-4 py-2 hover:bg-orange-300 hover:drop-shadow-md rounded active:drop-shadow-none font-semibold active:shadow-inner active:bg-orange-600'
  if (linkTo) {
    return (
      <div className='px-1'>
        <Link href={linkTo} className={buttonClass}>
          {children}
        </Link>
      </div>
    )
  } else {
    return (
      <div className='px-1'>
        <button onClick={onClick} className={buttonClass}>
          {children}
        </button>
      </div>
    )
  }
}

export default NavbarButton
