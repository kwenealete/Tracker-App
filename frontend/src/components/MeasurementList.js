import React, { Component } from 'react';
import Measurement from './Measurement';
import { getMeasurementsQuery } from '../queries/queries';
import { Query } from 'react-apollo';


class MeasurementList extends Component {
    render() {
        
        return(
            <Query query={getMeasurementsQuery} >
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching Measurements</div>
                    if (error) return <div>Error</div>

                    const measurementsTorender = data.getMeasurements

                    return (
                        <div>
                            <li>ID</li>
                            <li>WEIGHT</li>
                            <li>CREATED</li>
                            <li>ACTION</li>
                            { measurementsTorender.map(m => <Measurement key={m.id} measurement={m} />) }
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default MeasurementList
