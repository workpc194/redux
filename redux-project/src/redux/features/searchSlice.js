import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        page: 1,
        activeTab: 'photo',
        results: [],
        loading: false,
        error: null,
        hasStarted: false
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setResult: (state, action) => {
            state.results = action.payload
            state.loading = false
        },
        addResult: (state, action) => {
            state.results.push(...action.payload)
            state.loading = false
        },
        setLoading: (state) => {
            state.loading = true,
                state.error = null
        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        setPage: (state) => {
            state.page += 1
        },
        setPageOne: (state, action) => {
            state.page = action.payload
        },
        setHasStarted: (state) => {
            state.hasStarted = true
        }
    }
})

export const { setQuery, setActiveTab, setResult, addResult, setLoading, setError, setPage, setPageOne, setHasStarted } = searchSlice.actions

export default searchSlice.reducer