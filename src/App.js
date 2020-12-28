import React, { Component } from 'react';
import Burger from './components/Burger/Burger';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Burger/>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
