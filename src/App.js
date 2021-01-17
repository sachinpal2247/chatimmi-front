// import logo from './logo.svg';
import './App.css';
import './assets/website/css/style.css'
import './assets/website/css/animate.min.css'
import './assets/website/css/bootstrap.min.css'
import './assets/website/css/fontawesome.min.css'
import './assets/website/css/form-wizard.css'
import './assets/website/css/responsive.css'
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
