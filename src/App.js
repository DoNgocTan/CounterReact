import React, { Component } from 'react';
import Counters from './components/counters';
import './App.css';
import Navbar from './components/navbar';

class App extends Component {
  state = { counters:[
    {id:1,value:4},
    {id:2,value:0},
    {id:3,value:2},
    {id:4,value:3}
]
} 
handleDelete=(e)=>{
  
const counters = this.state.counters.filter(c=>c.id!==e.id);
this.setState({counters})
}
handleIncrement=(e)=>{
const counters=[...this.state.counters];
const index=counters.indexOf(e);
counters[index]={...e};
counters[index].value++;
this.setState({counters});

}
handleDecrement=(e)=>{
const counters=[...this.state.counters];
const index=counters.indexOf(e);
counters[index]={...e};// object
counters[index].value--;
this.setState({counters});

}
handleReset=()=>{
const counters=this.state.counters.map(counter=>counter.value=0)
this.setState(counters); //
}
  render() { 
    return (<React.Fragment>
      <Navbar counters={this.state.counters}></Navbar>
      <main className='container'><Counters 
      onReset={this.handleReset} 
      onIncrement={this.handleIncrement} 
      onDecrement={this.handleDecrement}
      onDel={this.handleDelete} counters={this.state.counters}></Counters></main>
    </React.Fragment>);
  }
}
 
export default App;
