import React from 'react';
import { graphql } from 'react-apollo';
import {getMeasurementQuery} from '../queries/queries';



class MeasurementDetails extends React.Component {
    
        displayMeasurementDetails(){
          const { measurement } = this.props.data;
          if (measurement) {
              return(
                  <div>
                      <h2>Details</h2>
                      <p>{measurement.weight}</p>
                      <p>{measurement.user.firstName}</p>
                      <p>{measurement.user.lastName}</p>
                      <p>{measurement.user.email}</p>
                      <ul className="other-measurements" >
                        {measurement.user.measurements.map(item => {
                            return <li key={item.id} > {item.weight} </li>
                        })}
                      </ul>
                  </div>
              )
          }else {
              return (
                  <div>No book selected...</div>
              )
          }
      }      
      render() {    
        return (
            <div id="measurement-details">
                {this.displayMeasurementDetails()}
            </div>
            );
    }
}

export default graphql(getMeasurementQuery, {
    options: (props) => {
        return{
            variables: {
                id: props.id
            }
        }
    }
})(MeasurementDetails);
 