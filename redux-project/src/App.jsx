import { useState } from 'react'
import {fetchPhotos, fetchVideo} from './API/mediaApi'

import SearchBar  from './components/SearchBar'
import Tabs  from './components/Tabs'
import ResultGrid from './components/ResultGrid'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen text-white w-full bg-gray-500'>
      <SearchBar/>

      <Tabs/>
      <ResultGrid/>
  
    </div>
  )}

  export default App