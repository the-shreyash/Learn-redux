import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {
    const [text, settext] = useState('')

    const dispatch = useDispatch()


    const submitHandler = (e)=>{
        e.preventDefault()

        dispatch(setQuery(text))

        settext('')
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
            
            
        }}
        action="" className='flex  gap-5 p-10'>
            <input value={text}
                onChange={(e)=>{
                    settext(e.target.value)
                }} 
            
                type="text" placeholder='search anything...' 
                className='border-2 px-4 py-2 text-xl rounded outline-none'
                required 
            />
            <button 
                className='active:scale-95  cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none'
              > Search</button>
        </form>
    </div>
  )
}

export default SearchBar













