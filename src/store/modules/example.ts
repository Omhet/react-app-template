import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '..';

interface State {
    data: string;
}

const initialState: State = {
    data: 'data',
};

const slice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<string>) {
            state.data = action.payload;
        },
    },
});

export const appendData = (data: string): AppThunk => (dispatch, getState) => {
    const { example } = getState();
    dispatch(exampleActions.setData(`${example.data}-${data}`));
};

export const exampleActions = slice.actions;

export default slice.reducer;
