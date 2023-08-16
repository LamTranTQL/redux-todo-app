import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface userState {
  id: string;
  name: string;
}

export interface editUser {
  user: userState;
  index: number;
}
const initialState: userState[] = [];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userState>) => {
      state.push(action.payload);
    },
    setDeleteUser: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    setUpdateUser: (state, { payload }: PayloadAction<editUser>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state[payload.index] = payload.user;
    },
  },
});

export const { setUser, setDeleteUser, setUpdateUser } = todoListSlice.actions;

export default todoListSlice.reducer;
