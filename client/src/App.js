import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader"
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from './components/Home.js'
import PlayerCardContainer from './containers/PlayerCardContainer'





class App extends React.Component {


componentDidMount() {
  this.props.getCurrentUser()
}

render(){
  const {loggedIn} = this.props

  return (
    <div>      
        <div className="App">
          <header className="App-header">
        <Router>
        <Home/>

          <Route exact path='/' render={(props) => loggedIn ? <PlayerCardContainer {...props}/> : <AppHeader {...props}/>}/>
          <Route exact path='/login' component={Login}/> 
          <Route exact path='/signup' render={(props) => <Signup history={props.history}/>}/> 
       </Router>
       </header>
     </div>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
      loggedIn: !!state.currentUser,
      // myEntries: state.myEntries
     
  }
}


export default connect(mapStateToProps, {getCurrentUser})(App);
