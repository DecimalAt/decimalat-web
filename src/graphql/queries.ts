import { gql } from '@apollo/client';

const JOB_VALIDATION_QUERY = gql`
{
  jobs(first: 5) {
    id
    creator
    params {
      id
    }
    paymentPerExecution
  }
  validations(first: 5) {
    id
    job {
      id
    }
    index
    params {
      id
    }
  }
}
`;

export default JOB_VALIDATION_QUERY;