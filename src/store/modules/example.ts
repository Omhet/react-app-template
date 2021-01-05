import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    data: string;
}

const initialState: State = {
    data: 'data',
};

const example = createSlice({
    name: 'example',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<string>) {
            state.data = action.payload;
        },
    },
});

export const exampleActions = example.actions;

export default example.reducer;
