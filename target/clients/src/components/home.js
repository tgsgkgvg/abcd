import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import GetTodos from './GetTodos';

export var client;

class Home extends Component {
  constructor(props) {
    super(props);
    
    client = new ApolloClient({
      uri: "https://hack-a-bit.herokuapp.com/v1alpha1/graphql",

    });
  }

  render() {
    return (
      <div className="container">


            <ApolloProvider client={client}>
              <GetTodos />
            </ApolloProvider>
      </div>
    );
  }
}

export default Home;
