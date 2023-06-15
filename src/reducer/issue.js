import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchIssues = createAsyncThunk('issues/fetchIssues', async (currentPage) => {
	const res = await axios.get(process.env.REACT_APP_BACKEND_URL,{
		params: {
      page: currentPage,
      per_page: 100,
    },
	})
	return res.data
})

export const fetchIssueDetails = createAsyncThunk(
	'issues/fetchIssueDetails',
	async number => {
		const res = await axios.get(process.env.REACT_APP_BACKEND_URL + `${number}`)
		return res.data
	},
)

const initialState = {
	issues: [],
	fetchIssueState: {
		loading: false,
		done: false,
		error: null,
	},
	detail: {},
}

export const issueSlice = createSlice({
	name: 'issues',
	initialState,
	extraReducers: builder => {
		builder.addCase(fetchIssues.pending, state => {
			state.fetchIssueState.loading = true
			state.fetchIssueState.done = false
			state.fetchIssueState.error = null
		})
		builder.addCase(fetchIssues.fulfilled, (state, action) => {
			state.fetchIssueState.loading = false
			state.fetchIssueState.done = true
			state.fetchIssueState.error = null
			state.issues = action.payload
		})
		builder.addCase(fetchIssues.rejected, (state, action) => {
			state.fetchIssueState.loading = false
			state.fetchIssueState.done = false
			state.fetchIssueState.error = action.payload
		})
		builder.addCase(fetchIssueDetails.pending, state => {
			state.fetchIssueState.loading = true
			state.fetchIssueState.done = false
			state.fetchIssueState.error = null
		})
		builder.addCase(fetchIssueDetails.fulfilled, (state, action) => {
			state.detail = action.payload
			state.fetchIssueState.loading = false
			state.fetchIssueState.done = true
			state.fetchIssueState.error = null
		})
		builder.addCase(fetchIssueDetails.rejected, (state, action) => {
			state.fetchIssueState.loading = false
			state.fetchIssueState.done = false
			state.fetchIssueState.error = action.payload
		})
	},
})
