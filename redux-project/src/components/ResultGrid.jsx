import { useDispatch,useSelector } from "react-redux"
import { fetchPhotos, fetchVideo } from "../API/mediaApi"
import { setQuery,setLoading,setError,setResults,clearResults } from "../redux/features/searchSlice"
import ResultCard from "./ResultCard"
import { store } from '../redux/store'
import { useEffect } from "react"
import { title } from "npz"


const ResultGrid = () => {
    const dispatch = useDispatch() 

    const {query,activeTab,results,loading,error} = useSelector((store)=>store.Search)
   
    useEffect(function(){

      if(!query) return  

      const getData = async () => {
       try{
        dispatch(setLoading())
         let data = []
         if (activeTab == 'photos') {
           let response = await fetchPhotos(query)
           data = response.results.map((item) => ({
             id: item.id,
             type: 'photo',
             title: item.alt_description || 'image',
             thumbnail: item.urls.small,
             src: item.urls.full,

           }))
           console.log(data)
         }
         if (activeTab == 'video') {
           let response = await fetchVideo(query)
           data = response.videos.map((item) => ({
             id: item.id,
             type: 'video',
             title: item.user.name || 'video',
             thumbnail: item.image,
             src: item.video_files[0].link
           }))
           console.log(data)
         }
         dispatch(setResults(data))
       }catch(err){
          dispatch(setError(err.message))
       }
      }
      getData()
    },[query,activeTab])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading</h1>

      
     
  return (  
    <div>
      {
        results.map((item,idx)=>{
          return <div key={idx}> 
            <ResultCard item = {item}/>

          </div>
        })
      }
    </div>
  )
}

export default ResultGrid
