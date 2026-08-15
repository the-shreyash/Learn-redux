import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name:"search",
    initialState :{
        query:'',
        activeTab: 'photos',
        setResults:[],
        loading:false,
        error: null,

    },

    reducers:{
        setQuery(state,action){
            state.query = action.payload
        },
        setActiveTabs(state,action){
            state.activeTab = action.payload
        },
        setResults(state,action){
            state.resutl = action.payload
            state.loading = false
        },
        setLoading(state,action){
            state.loading = true
            state.error = null
        },
        setError(state,action){
            state.error = action.payload
            state.loading = false
        },
        clearResults(state){
            state.resutls = []
        }

    }
})

export const {setQuery ,setActiveTabs,setLoading,setError,setResults,clearResults}= searchSlice.actions

export default searchSlice.reducer
 