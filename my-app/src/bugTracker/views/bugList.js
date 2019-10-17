import React, { Component } from 'react';
import { BugItem } from './bugItem';

export class BugList extends Component{
    render(){
        let { bugs, toggle, removeClosed } = this.props,
            bugItems = bugs.map((bug, index) => <BugItem bug={bug} toggle={toggle} key={index}/>);
        return(
            <section className="list">
                <ol>
                    {bugItems}
                </ol>
                <input type="button" value="Remove Closed"  onClick={evt => removeClosed(bugs)} />
            </section>
        )
    }
}
