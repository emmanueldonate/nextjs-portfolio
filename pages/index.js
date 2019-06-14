import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

  class Index extends React.Component {

    constructor() {
      super();
      
      console.log('constructor');
    }

    componentDidMount() {
      console.log('componentDidMount');

    }

    componentDidUpdate() {
      console.log('componentDidUpdate');
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }

  render() {
    console.log('render');

    return(
      <BaseLayout>
        <h1 className='fromPage'>index page Component</h1>
      </BaseLayout>
    )
  }
  }
  
  export default Index;