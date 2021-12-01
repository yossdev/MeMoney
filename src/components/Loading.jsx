import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <HashLoader color={'#FF5B56'} loading={true} size={150} />
    </div>
  )
}

export default Loading
