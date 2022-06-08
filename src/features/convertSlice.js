import { createSlice } from '@reduxjs/toolkit'

export const convertSlice = createSlice({
    name: 'convert',
    initialState: {
        value: '',
    },
    reducers: {
        romanToDecimal: (state, e) => {
            console.log(e)
                // state.value = state;
        },
        decimalToRoman: (state, e) => {
            console.log(e)
                // state.value = state;
        }
    },
})

export const { romanToDecimal, decimalToRoman } = convertSlice.actions

export default convertSlice.reducer