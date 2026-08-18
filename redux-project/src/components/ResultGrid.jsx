import { useDispatch,useSelector } from "react-redux"
import { fetchPhotos, fetchVideo } from "../API/mediaApi"
import { setQuery,setLoading,setError,setResults,clearResults } from "../redux/features/searchSlice"

import { store } from '../redux/store'
import { useEffect } from "react"


const ResultGrid = () => {
    const dispatch = useDispatch() 

    const {query,activeTab,results,loading,error} = useSelector((store)=>store.Search)
   
    let data 
    const getData = async()=>{
      if(activeTab=='photos'){
         data = await fetchPhotos(query)
        console.log(data)
      } 
      if(activeTab=='video'){
         data = await fetchVideos(query)
        console.log(data)
      } 
    }
     
  return (
    <div>
      <button onClick={getData} >getData</button>
    </div>
  )
}

export default ResultGrid
