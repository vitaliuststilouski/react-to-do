import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component{
    render() {
        return(
            <input type="text" placeholder="search todo"/>
        )
    }
}

export default SearchPanel;