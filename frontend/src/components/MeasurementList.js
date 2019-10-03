import React from 'react';
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
                )
            })
        }
    }
  render() {     
      return (
        <div>
            <h3>Your weight measurements</h3>
            <table>
                <tbody id="measurement-list">
                                     
                    {this.displayMeasurements()}
                    
                </tbody>
            </table>
            
            {/* <ul id="measurement-list">
                {this.displayMeasurements()}                
            </ul>            */}
        </div>
      );
  }
}

export default graphql(getMeasurementsQuery)(Measurement);
 