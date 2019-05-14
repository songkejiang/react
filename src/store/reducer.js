import { CHANGE_TODO_ITEM, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionTypes";
const defaultState = {
    inputValue: '',
    list: [],
    focused: false
}
export default (state = defaultState, action) => {
    if (action.type === CHANGE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    if(action.type==='search_focused') {
        return{
            focused : true
        }
    }
    if(action.type==='search_blur') {
        return {
            focused: false
        }
    }
    return state
}