import React from 'react';
import { graphql } from 'react-apollo';
import {getMeasurementsQuery} from '../queries/queries';




class Measurement extends React.Component {

    
    
    
    displayMeasurements() {
        let data = this.props.data;
        if(data.loading) {
            return (<div>Loading measurements...</div>)
        } else {
            return data.getMeasurements.map(measurement => {
                return(
                    <li key={measurement.id} onClick={(e) => this.setState({selected:measurement.id})} > {new Date(measurement.createdAt).toLocaleTimeString()} {measurement.weight}
                    <button  >delete</button>
                    <button>edit</button> 
                    </li>
                    
                )
            })
        }
    }
  render() {
      
      
    return (
      <div>
        <ul id="measurement-lis">
            {this.displayMeasurements()}
            
        </ul>
        
    
      </div>
    );
  }
}

export default graphql(getMeasurementsQuery) (Measurement);
 