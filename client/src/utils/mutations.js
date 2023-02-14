import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_ASSESSMENT = gql`
  mutation createAssessment($input: assessmentBody!) {
    createAssessment(input: $input) {
      hullNumber
      hull {
        fiberglass
        gelCoat
        paint
        preservation
      }
    }
  }
`