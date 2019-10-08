import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { createMeasurement } from '../queries/queries';

class AddMeasurement extends Component {
  state = {
    weight: '',
    userId: '',
  }

  render() {
    const { weight, userId } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={userId}
            onChange={e => this.setState({ userId: e.target.value })}
            type="text"
            placeholder="UserId"
          />
          <input
            className="mb2"
            value={weight}
            onChange={e => this.setState({ weight: e.target.value })}
            type="text"
            placeholder="Enter weight measurement"
          />
        </div>
        <Mutation 
            mutation={createMeasurement}
            variables={{ weight: parseFloat(weight), userId: parseInt(userId) }}
            onCompleted={() => this.props.history.push('/')}
             >
          { weightMutattion => <button onClick= {weightMutattion} >Add Weight</button> }
        </Mutation>
      </div>
    )
  }
}

export default AddMeasurement