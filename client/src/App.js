import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader.js"
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"
import Home from './components/Home.js'
import NavBar from './components/Navbar.js'
import NewPlayerCard from './components/NewPlayerCard.js'
import MyPlayerCard from './components/MyPlayerCard.js'

class App extends React.Component {

componentDidMount() {
  this.props.getCurrentUser()
}

render(){
  const {loggedIn, myPlayerCard} = this.props

    return (
        <div className="App">
          <header className="App-header"> 
            <Router>
            <Home/>
            {loggedIn ? <NavBar/> : <AppHeader/>}
              {/* <Route exact path='/login' component={Login}/> 
              <Route exact path='/signup' render={(props) => <Signup history={props.history}/>}/>   
              <Route exact path='/' render={(props) => loggedIn ? <MyPlayerCard {...props}/> : <AppHeader {...props}/>}/>  */}
              <Route exact path='/playercard/:id' render={props => {
                  const playercard = MyPlayerCard.find(playercard => playercard.id === props.match.params.id)
                  return <MyPlayerCard playercard={playercard} {...props}/> }
              }/>        
            </Router>
          </header>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
    myPlayerCard: state.myPlayerCard    
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
