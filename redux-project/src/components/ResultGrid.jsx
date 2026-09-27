import { useDispatch,useSelector } from "react-redux"
import { fetchPhotos, fetchVideo } from "../API/mediaApi"
import { setLoading,setError,setResults } from "../redux/features/searchSlice"
import ResultCard from "./ResultCard"
import { useEffect } from "react"


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
         if (activeTab == 'videos') {
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
    },[query,activeTab,dispatch])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading</h1>
 
      
     
  return (  
    <div className="flex flex-wrap gap-5 overflow-auto px-10 py-6"> 
      {
        results.map((item)=>{
          return <div key={item.id}> 
              <ResultCard item = {item}/>

          </div>
        })
      }
    </div>
  )
}

export default ResultGrid
