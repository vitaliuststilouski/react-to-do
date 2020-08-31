import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ToDoList from '../todo-list/todo-list';
import AddItem from '../add-item/add-item';
import StatusFilter from '../status-filter/status-filter';

import './App.css';


class App extends Component{
  constructor() {
    super();

    this.maxId = 0;

    this.state = {
      todoData: [
        { textValue: 'Drink Tea', id: 1, importance: false} ,
        { textValue: 'Call Zheka', id: 2, importance: false },
        { textValue: 'Make Bio', id: 3, importance: false }
      ]
    }
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onDeleteItem(id) {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id );

      const updatedToDo = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

      return {
        todoData: updatedToDo
      }
    })
  }

  render() {
    return (
      <div className="app mx-auto">
       <h1 className="to-do-title">ToDo list</h1>
       <div className="d-flex justify-content-between">
         <SearchPanel/>
         <StatusFilter/>
       </div>  
       <AppHeader/>
       <ToDoList todoData={this.state.todoData} onToggleDone={this.onToggleDone} onDeleteItem={this.onDeleteItem}/>
       <AddItem/>
    </div>
    );
  }
}

export default App;
