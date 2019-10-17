import React, { Component } from 'react';

import { BugSort } from './views/bugSort';
import { BugStats } from './views/bugStats';
import { BugEdit } from './views/bugEdit';
import { BugList } from './views/bugList';
class BugTracker extends Component{
    render(){
        let { bugs, addNew, toggle, removeClosed } = this.props;
        return(
            <div>
                <BugStats bugs={bugs}></BugStats>
                <BugSort/>
                <BugEdit addNew={addNew}></BugEdit>
                <BugList { ...{bugs, toggle, removeClosed}}></BugList>
            </div>
        )
    }
}
export default BugTracker;