import { createSlice } from "@reduxjs/toolkit"
import { IMovie } from "../../services/movies/types"

const useMovie = createSlice({
    name: "movie",
    initialState: {value: {} as IMovie},
    reducers: {
        setMovie: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setMovie} = useMovie.actions;

export default useMovie.reducer;