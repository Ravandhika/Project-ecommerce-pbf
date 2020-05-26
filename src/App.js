import React, {Component }from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './Pages/HomePage'
import Registration from './Pages/RegistrasionPage'
import MainLayout from './Layout/MainLayout'
import Login from './Pages/Login'
import './default.scss'
import {auth} from './Firebase/util'

const initialState = {
  currentUser: null
};
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      ...initialState
    };
  }

  authListener = null;

  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(userAuth =>{
      if(!userAuth) return;

      this.setState({
        currentUser: userAuth
      });
    });
  }
  componentWillUnmount(){
    this.authListener();
  }

  render(){
    const {currentUser} =this.setState;

    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render={() =>(
              <MainLayout currentUser={currentUser}>
                <Homepage/>
              </MainLayout>
            )}/>
            <Route path="/registration" render={() =>(
              <MainLayout currentUser={currentUser}>
                <Registration/>
              </MainLayout>
            )}/>
            <Route path="/login" render={() =>(
              <MainLayout currentUser={currentUser}>
                <Login/>
              </MainLayout>
            )}/>
            
          </Switch>
      </div>
    );
  }
}

export default App;
