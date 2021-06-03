import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListComp from './components/ListComp';

class Dashboard extends Component{
  state={
    users:[]
  }
  clickHandler=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        this.setState({
            users:res.data
        })
    }).catch((error)=> console.log("Error:",error))
  }
  render(){
    return <div>
      <button onClick={this.clickHandler}>get data</button>
      <ul>
        {this.state.users.map(val => <ListComp key={val.id} user={val}/>)}
      </ul>   
    </div>
  }
}
 export default Dashboard;