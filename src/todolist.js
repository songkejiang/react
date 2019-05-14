import React, { Component } from 'react'
import store from './store'
import { getInputChangeAction, getBttonClickAction, getItemDelete, getInitList } from './store/actionCreators'
import TodoListUI from './todolistUI'
class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState() 
        this.handleInput = this.handleInput.bind(this)
        this.handleBttonClick = this.handleBttonClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleInputChange)
    }
    render() {
        return (
           <TodoListUI 
            inputValue={this.state.inputValue}
            handleInput={this.handleInput}
            handleBttonClick={this.handleBttonClick}
            list={this.state.list}
            handleItemDelete={this.handleItemDelete}
           />
        )
    }
    componentDidMount() {
        const action = getInitList()
            store.dispatch(action)

        // axios.get('/api/todolist').then((res) => {
        //     const action = initListAction(res.data)
        //     console.log(action)
        // })
    }
    handleInput(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleInputChange() {
        this.setState(store.getState())
    }
    handleBttonClick(){
        const action = getBttonClickAction()
        store.dispatch(action)
    }
    handleItemDelete(index) {
        const action = getItemDelete(index)
        store.dispatch(action)
    }
}
export default Todolist