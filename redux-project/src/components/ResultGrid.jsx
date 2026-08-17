import { useDispatch,useSelector } from "react-redux"
import { fetchPhotos,fetchVideo } from "../API/mediaApi"
import { setQuery,setLoading,setError,setResults,clearResults } from "../redux/features/searchSlice"
import { Search } from "lucide-react"


const ResultGrid = () => {
    const dispatch = useDispatch() 

    const {query,activeTab,results,laoding,error} = useSelector((store)=>Search.store)
     
  return (
    <div>ResultGrid</div>
  )
}

export default ResultGrid
