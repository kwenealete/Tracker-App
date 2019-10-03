import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Components
import MeasurementList from './components/MeasurementList';
import AddMeasurement from './components/AddMeasurement';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <div className="App">
          <h1>Weight Tracker Application</h1>
          <MeasurementList />
          <AddMeasurement />
          
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
