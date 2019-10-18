import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BugSort } from './views/bugSort';
import { BugStats } from './views/bugStats';
import { BugEdit } from './views/bugEdit';
import { BugList } from './views/bugList';

import * as bugActionCreators from './actions';

class BugTracker extends Component{
    componentDidMount(){
        this.props.load();
    }
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

function mapDispatchToProps(dispatch){
    let bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

function mapStateToProps(storeState){
    let bugs = storeState.bugsData;
    return { bugs : bugs };
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BugTracker);