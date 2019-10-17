import React , { Component } from 'react';

export class BugItem extends Component{
    render(){
        const { toggle, bug } = this.props;
        return(
            <li>
                { bug.isClosed ? ( <span 
                    className="bugname closed"
                    onClick={ evt => toggle(bug)}
                >
                    {bug.name }
                </span>) : (
                    <span 
                    className="bugname"
                    onClick={ evt => toggle(bug)}
                >
                    {bug.name }
                </span>
                )}
                
            </li>
        )
    }
}