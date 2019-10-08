import React from 'react';

import { Switch, Route } from 'react-router-dom';

//Components
import MeasurementList from './MeasurementList';
import AddMeasurement from './AddMeasurement';
import Header from './Header';


class App extends React.Component {
  render() {
    return (
       
          <div className="center w85">
            <Header />
            {/* <MeasurementList /> */}
            <div className= "ph3 pv1 background-gray">
                <Switch>
                  <Route exact path="/" component={MeasurementList} />
                  <Route exact path="/create" component={AddMeasurement} />
                </Switch>
            </div>
            
          </div>
     
            
    );
  }
}

export default App;
