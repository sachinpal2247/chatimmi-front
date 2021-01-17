// import logo from './logo.svg';
import './App.css';
import './website/css/style.css'
import './website/css/animate.min.css'
import './website/css/bootstrap.min.css'
import './website/css/fontawesome.min.css'
import './website/css/form-wizard.css'
import './website/css/responsive.css'
import { Component } from 'react';
import Routes from './Routes/Routes';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

    render(){
      return (
        <Routes />
      );
  }
}

export default App;
