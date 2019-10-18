import React from 'react';
import * as spinnerActionCreators from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Spinner extends React.Component{
    state ={
        delta : 0
    }
    render(){
        let { value, up, down } = this.props,
            { delta } = this.state;
        return(
            <div>
                    <span>Delta :</span>
                    <input type="number" onChange={ evt => this.setState({delta : evt.target.valueAsNumber})} />
                    <br/>
                    <input type="button" value="DOWN" onClick={() => down(delta)}/>
                    <span> [ {value} ] </span>
                    <input type="button" value="UP" onClick={() => up(delta)}/>
            </div>
        )
    }
}

//making the action dispatchers available to the component
function mapDispatchToProps(dispatch){
    let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

//extracting data from the store for the component
function mapStateToProps(storeState){
    let value = storeState.spinnerData;
    return { value : value };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Spinner);