import React, { Component } from 'react';
import { ErrorIndicator, Spinner } from '../helpers';

const withComponentMethods = methods => Wrapper => {
    return class extends Component{
        state = {
            hasError: false,
            loading: true
        }

        componentDidMount = () => {
            const {bss} = this.props;
            
            const {getData} = methods(bss);
            getData()
                .then(res => this.setState({loading: false}))
                .catch(err => this.onError())
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


export default withComponentMethods;