import { createSlice } from '@reduxjs/toolkit'

export const convertSlice = createSlice({
    name: 'convert',
    initialState: {
        value: '',
    },
    reducers: {
        romanToDecimal: (state, e) => {
            console.log(e)
            state.value = e.payload;
        },
        decimalToRoman: (state, e) => {
            console.log(e)
                state.value = e.payload;
        }
    },
})

export const { romanToDecimal, decimalToRoman } = convertSlice.actions

export default convertSlice.reducer