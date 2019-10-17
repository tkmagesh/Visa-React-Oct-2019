import React from 'react';

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

export default Spinner;