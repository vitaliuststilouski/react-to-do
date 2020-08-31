import React, { Component } from 'react';

import './todo-list-item.css';


class ToDoListItem extends Component {
    constructor() {
        super();
        this.state = {
            done: false,
            importance: false
        }

        this.onToggleDone = this.onToggleDone.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
    }

      
  onToggleDone() {
    this.setState(({done} ) => {
        return {
            done: !done
        }
    });
  }

  onToggleImportant() {
      this.setState(( {importance} ) => {
          return {
            importance: !importance
          }
      } )
  }
  
  render() {
    const { todo, onDeleteItem } =  this.props;
    const { done, importance } = this.state;

    let clazz = 'todo-list-text-value';
    let classNamesImportant = 'btn-outline-success'

    if (done) {
        clazz += ' done';
    }

    if (importance) {
        clazz += ' importance';
        classNamesImportant = 'btn-success'
    }
        

    return (
        <li className="list-group-item todo-list-item d-flex align-items-center justify-content-between">
            <span className={clazz} onClick={this.onToggleDone}>{todo}</span>
            <div>
            <button type="button" className={`btn ${classNamesImportant}  btn-sm`} onClick={this.onToggleImportant}>
                <i className="fa fa-bookmark-o" />
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleteItem}>
                <i className="fa fa-ban" />
            </button>
                </div>
        </li>
        )
    }
}

export default ToDoListItem;