import { useState } from 'react'
import {fetchPhotos, fetchVideo} from './API/mediaApi'
import { Search } from 'lucide-react'
import SearchBar  from './components/SearchBar'
import Tabs  from './components/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen text-white w-full bg-gray-500'>
      <SearchBar/>

      <Tabs/>
  
    </div>
  )}

  export default App