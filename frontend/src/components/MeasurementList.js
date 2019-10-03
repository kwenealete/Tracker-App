import React from 'react';
// import {gql} from 'apollo-boost';
import { graphql } from 'react-apollo';
import {getMeasurementsQuery} from '../queries/queries';


class Measurement extends React.Component { 


    
        
    displayMeasurements() {
        let data = this.props.data;
        if(data.loading) {
            return (<h2>Loading measurements...</h2>)
        } else {
            return data.getMeasurements.map(measurement => {
                
                const { id, weight } = measurement
                return(
                     
                    <tr key={id} >
                        
                        <td> {weight} </td>
                        <button  >edit</button>
                        <button>delete</button> 
                    </tr>

                    // <li key={measurement.id} > {measurement.weight}
                    
                    // </li>                    
                )
            })
        }
    }
  render() {     
      return (
        <div>
            <h3>Your weight measurements</h3>
            <table>
                <tbody>
                                     
                    {this.displayMeasurements()}
                    
                </tbody>
            </table>
            
            {/* <ul id="measurement-lis">
                {this.displayMeasurements()}                
            </ul>            */}
        </div>
      );
  }
}

export default graphql(getMeasurementsQuery)(Measurement);
 