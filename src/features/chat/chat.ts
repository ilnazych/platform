import { createSlice } from '@reduxjs/toolkit'

export interface ChatState {
  drawer: boolean
  childrenDrawer: boolean
}

const initialState: ChatState = {
  drawer: false,
  childrenDrawer: false,
}

export const chatState = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setDrawer: (state) => {
      state.drawer = !state.drawer
    },
    setChildrenDrawer: (state) => {
      state.childrenDrawer = !state.childrenDrawer
    }
    },
})

export const { setDrawer, setChildrenDrawer } = chatState.actions
export default chatState.reducer