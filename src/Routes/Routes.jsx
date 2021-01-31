import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Components/auth/Signup';
import Home from '../Components/Home/Home';
import Profile from '../Components/Home/Profile';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';


class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />

            </Switch>
            <Footer />
            </>
        );
    }
}

export default Routes;
