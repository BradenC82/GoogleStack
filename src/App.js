import React from 'react';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';

import firebase from './firebase.js'

const db = firebase.firestore();


class App extends React.Component {

  state={orders:[{table:1,items:['food']}]}

  componentDidMount(){

    db.collection("orders").onSnapshot((querySnapshot) => {
      let data = querySnapshot.docs.map(doc => {
        let obj = doc.data()
        obj.id = doc.id
        console.log(obj)
        return obj
      })
      this.setState({ orders: data })
    });

  }

  render (){
    return(
    <div>
      <MyNavbar></MyNavbar>
      <Dashboard orders={this.state.orders}></Dashboard>
    </div>
    )
  }
    
}

export default App;
