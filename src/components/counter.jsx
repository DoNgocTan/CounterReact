import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
console.log('prevProps',prevProps);
console.log('prevState',prevState);
    }
    render() {
        console.log( 'Counter - Rendered');
        const {onHandleIncrement,onHandleDecrement,onDelete,counter}=this.props;
        return (<div>
           
            <span className={this.GetBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=>onHandleIncrement(counter)} className="btn btn-primary btn-sm">Increment</button>
            <button onClick={()=>onHandleDecrement(counter)} className="btn btn-info btn-sm">Decrement</button>
            <button onClick={()=>onDelete(counter)} className="btn btn-danger btn-sm m2">Delete</button>
            {/* {this.renderTag()} */}
            </div>
            )
    }

    GetBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const { value }=this.props.counter;
        return value=== 0 ? "Zero" : value;
    }
    
    
}

 
export default Counter;