import {gql} from 'apollo-boost';

const getMeasurementsQuery = gql`
{
    getMeasurements {
        id
        weight
        createdAt
        user {
          id
          lastName
          firstName
          email
        }
      }
}`;

const createMeasurement = gql`
mutation createMeasurement($userId: Int!, $weight: Float!){
    createMeasurement(userId: $userId  weight: $weight) {
        id
        weight
        createdAt
        user {
            id
            firstName
            email
            }        
      }
}`;

const deleteMeasurememt = gql`
mutation deleteMeasurement($id: Int!){
    deleteMeasurement(id: $id)
}`;

const updateMeasurement = gql`
mutation deleteMeasurement($id: Int!, $weight: Float!){
    updateMeasurement(id: $id weight: $weight )
}`;

const getMeasurementQuery = gql`

    query ($id: Int!){
        getMeasurement(id: $id) {
          id
          weight
          user {
            email
            lastName
            id
            firstName
            measurements {
                id
                weight
              }
          }
        }
      }`;
      


export {getMeasurementsQuery, createMeasurement, getMeasurementQuery, deleteMeasurememt, updateMeasurement}