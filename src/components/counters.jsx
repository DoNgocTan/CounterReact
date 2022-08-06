import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const {onReset,onDel,onDecrement,onIncrement,counters}=this.props;
        return (<React.Fragment>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {
            counters.map(counter=><Counter 
                 key={counter.id}
                 onDelete={onDel}
                 onHandleDecrement={onDecrement}
                 onHandleIncrement={onIncrement} 
                 counter={counter}></Counter>)
            }
        </React.Fragment>);
    }
}
 
export default Counters;