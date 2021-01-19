import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header} from '../components';
import { CartPage, HomePage } from '../pages';
import './index.scss';

class App extends Component {
    render(){
        return(
            <div className='app'>
                <Header/>
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/cart' component={CartPage}/>
                </Switch>
            </div>
        );
    };
};

export default App;