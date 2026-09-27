const ResultCard = ({item}) => {
  return (
    <div className='w-96 bg-white rounded overflow-hidden'>
      {item.type === 'photo' ? <img className='h-80 w-full object-cover ' src={item.src} alt={item.title} /> : null}
      {item.type === 'video' ? <video className='h-80 w-full object-cover' autoPlay loop muted src={item.src}></video> : null}
      
      <h1 className='text-black p-3'>{item.title}</h1>


    </div>
  )
}

export default ResultCard
