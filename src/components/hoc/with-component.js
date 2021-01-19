import React, { Component } from 'react';
import { ErrorIndicator, Spinner } from '../helpers';

const withComponent = Wrapper => {
    return class extends Component{
        state = {
            hasError: false,
            loading: true
        }
        

        componentDidCatch = () => this.setState({hasError: true, loading: false});
        onError = () => this.setState({hasError: true, loading: false});
        
        render(){
            const {hasError, loading} = this.state;


            if(hasError) return <ErrorIndicator/>
            if(loading) return <Spinner/>

            return <Wrapper {...this.props}/>
        }
    }
};


export default withComponent;