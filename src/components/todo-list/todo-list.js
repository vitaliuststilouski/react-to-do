import React, { Component } from 'react';
import ToDoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

class ToDoList extends Component {

    render() {
    const { todoData, onDeleteItem } = this.props;
        
    const todoTextValue = todoData.map(
        item => <ToDoListItem key={item.id} todo={item.textValue} onDeleteItem={() => onDeleteItem(item.id)}/>
    );
    return(
        <ul className="list-group">
            {todoTextValue}
        </ul>
    )
  }
}

export default ToDoList;