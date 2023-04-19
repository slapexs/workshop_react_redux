import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface counterModel {
	counter: number
	isReset: boolean
}

const initialState: counterModel = {
	counter: 0,
	isReset: false,
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		plus: (state) => {
			state.counter += 1
		},
		minus: (state) => {
			state.counter -= 1
		},
		reset: (state) => {
			state.counter = 0
			state.isReset = true
		},
	},
})

export const { plus, minus, reset } = counterSlice.actions
export default counterSlice.reducer
