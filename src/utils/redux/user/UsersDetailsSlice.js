import { createSlice } from '@reduxjs/toolkit'

const initialTasks = {
  currentUser: { name: "", email: "", username: "", password: "" },
  users: []
}



const add = (state, action) => {
      return {
        currentUser: state.currentUser,
        users: [...state.users, action.payload]
      }
}


const edit = (state, action) => {
      let users = [...state.users]
      users = users.filter(user => user.id !== action.payload.id);
      return {
        currentUser: action.payload,
        users
      }
}


const remove = (state, action) => {
      let users = [...state.users]
      users = users.filter(user => user.id !== action.payload.id);
      return {
        ...state,
        users
      }
}


const UsersDetailsSlice = createSlice({
    name: 'usersDetailss',
    initialState: initialTasks,
    reducers: {
        add,
        edit,
        remove
    }
})

export const {
    add: addAction,
    edit: editAction,
    remove: removeAction
} = UsersDetailsSlice.actions

export default UsersDetailsSlice.reducer;