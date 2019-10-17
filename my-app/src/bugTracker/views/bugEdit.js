import React, { Component} from 'react';

export class BugEdit extends Component{
    state = { newBugName : '' };
    render(){
        const { addNew } = this.props,
            { newBugName } = this.state;
        return(
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" onChange={ evt => this.setState({newBugName : evt.target.value}) }/>
                <span> [ {newBugName.length} ] </span>
                <input type="button" value="Add New" onClick={ evt => addNew(this.state.newBugName)} />
            </section>
        )
    }
}