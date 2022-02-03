import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        quantity: 1,
    },
    reducers: {
        increment: (state) => {
            state.quantity += 1;
        },
        decrement: (state) => {
            if (state.quantity > 1) state.quantity -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
