import React from 'react';
import { graphql } from 'react-apollo';
import { getMeasurementsQuery } from '../queries/queries';
import {createMeasurement } from '../queries/queries';


class AddMeasurement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
            weight: '',
            
        };
    }

    submitForm(e)  {
        e.preventDefault();
        this.props.createMeasurement({
            variables: {
                userId: parseInt(this.state.userId),
                weight:parseFloat(this.state.weight)
            },
            refetchQueries: [{ query: getMeasurementsQuery }]
        });
        
    }
    render() {
        return(
            <form id="add-weight" onSubmit={this.submitForm.bind(this)} >
                <div>
                    <label>userId</label>
                    <input placeholder="use 1 for userId" type="number" onChange={(e) => this.setState({userId:e.target.value})} />
                </div>
                <div>
                    <label>weight</label>
                    <input placeholder="enter weight" type="number" onChange={(e) =>this.setState({weight:e.target.value})} />
                </div>
                {/* <div>
                    <label>createdAt</label>
                    <input placeholder="yyyy-mm-dd" type="number" onChange = {(e) => this.setState({createdAt:e.target.value})} />
                    
                </div> */}
                <button>Add weight</button>
            </form>
        )
    }
}

export default graphql (createMeasurement, {name: 'createMeasurement'}) (AddMeasurement);
