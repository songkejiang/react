import { CHANGE_TODO_ITEM, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GETINITLIST } from "./actionTypes";
import axios from 'axios'
export const getInputChangeAction = (value) => ({
     type: CHANGE_TODO_ITEM,
     value
})

export const getBttonClickAction = () => ({
    type: ADD_TODO_ITEM,
    value: ''
})
export const getItemDelete = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})
// export const getTodoList = (data) => {
//     return (dispatch) => {
//         axios.get('/api/todolist').then((res) => {
//             const action = initListAction(res.data)
//             dispatch(action)
//             console.log(action)
//         })
//     }
// }

export const getInitList = () => ({
    type: GETINITLIST
})