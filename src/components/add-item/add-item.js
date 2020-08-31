import React, { Component } from 'react';

import './add-item.css';

class AddItem extends Component{
    render() {
        return(
            <form  className="d-flex justify-content-between add-item">
                <input type="text" placeholder="add item"/>
                <button type="button" className="btn btn-outline-primary">Add ToDo Item</button>
            </form>
        )
    }
}

export default AddItem;