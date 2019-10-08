import React from 'react';


class Measurement extends React.Component {
    render() {
        return(
            <div>
                <div>
                    {this.props.measurement.id} {this.props.measurement.weight}
                    
                </div>
            </div>

        )
        
    }
}

export default Measurement;