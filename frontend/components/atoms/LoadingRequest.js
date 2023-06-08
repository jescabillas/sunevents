const { default: Image } = require('next/image')

const LoadingRequest = ({ height = 'h-32' }) => {
  return (
    <div className={`${height} w-full flex items-center justify-center`}>
      <Image
        alt='Loading gif'
        width={50}
        height={50}
        src='/images/orange_loading.gif'
      />
    </div>
  )
}

export default LoadingRequest
