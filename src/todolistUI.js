import React from 'react'
import { Input, Button, List } from 'antd';
const TodolistUI = (props) =>  {
    return(
        <div>
            <Input
                value={props.inputValue}
                placeholder='number'
                style={{ width: '300px' }}
                onChange={props.handleInput}
                />
            <Button onClick={props.handleBttonClick}>我是按钮</Button>
            <List
                size="small"
                style={{ width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
                
            ></List>
        </div> 
    )
}
export default TodolistUI