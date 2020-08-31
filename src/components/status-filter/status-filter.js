import React, { Component } from 'react';

import './status-filter.css';

class StatusFilter extends Component{
    render() {
        return(
            <div className="btn-group">
                <button type="button" className="btn btn-primary">All</button>
                <button type="button" className="btn btn-outline-secondary">Active</button>
                <button type="button" className="btn btn-outline-success">Done</button>
            </div>
        )
    }
}

export default StatusFilter;