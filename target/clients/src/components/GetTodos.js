import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getAllBMI } from '../query';
import { ListGroup, Grid, Row, Col } from 'react-bootstrap';
import { client } from './home';
import { ApolloProvider } from "react-apollo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class GetAllTodos extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

      return(<ApolloProvider client={client}>
          <div className="container">
              <h2 style={{ 'text-align': 'center' }}>All Todos</h2>
              <h3 style={{ 'text-align': 'center' }}>Todos in Green Are Completed while in Red are Pending</h3>
              <Grid>
                  <Row>
                      <Col md={8} mdPush={2}>
                          <Query query={getAllBMI}>
                              {({ loading, error, data }) => {
                                  if (loading) return (<h2>Loading... <FontAwesomeIcon icon={faSpinner} style={{ color: 'blue' }} spin /></h2>);
                                  if (error) return (`Error fetching todos.`);

                                  return (
                                      <div>
                                          <ListGroup>
                                              {data.todos.map((todo) => (

                                                console.log(todo)

                                              ))}
                                          </ListGroup>
                                      </div>
                                  );
                              }}
                          </Query>
                      </Col>
                  </Row>
              </Grid>
          </div>
      </ApolloProvider>)


    }
}

export default GetAllTodos;
