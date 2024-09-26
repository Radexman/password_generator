import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface UserState {
	password: string | null;
}

const initialState: UserState = {
	password: null,
};

export const passwordSlice = createSlice({
	name: 'password',
	initialState,
	reducers: {
		generatePassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
});

export const selectPassword = (state: RootState) => state.password.password;

export default passwordSlice.reducer;
