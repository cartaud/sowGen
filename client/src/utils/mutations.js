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

export const ADD_HULL = gql`
  mutation addHull($input: hullBody!) {
    addHull(input: $input) {
      hullNumber
      fiberglass
      gelCoat
      paint
      preservation
  }
}
`

export const ADD_SPONSON = gql`
  mutation addSponson($input: sponsonBody!) {
    addSponson(input: $input) {
      hullNumber
      tube
      mbcs
      retainers
      transomStraps
      sponsonGasket
  }
}
`

export const ADD_PROPULSION = gql`
  mutation addPropulsion($input: propulsionBody!) {
    addPropulsion(input: $input) {
      outdrive 
      outdrivePaint 
      propeller 
      tillerBracket 
      trimHoses 
      trimCylinders 
      outdriveZincs
      outdriveGrounding
      bellows
      outdriveReservoir
      interiorTrimHose
      trimPump
      trimSolenoids
      trimBracket
      driveshaft
      aftHoop
      aftBearing
      forwardHoop
      forwardBearing
      shiftCables
      throttleCable
      cableBracket
      controlHead
      throttlePlacard
  }
}
`

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
      sponson {
        tube
        mbcs
        retainers
        transomStraps
        sponsonGasket
      }
      propulsion {
        outdrive 
        outdrivePaint 
        propeller 
        tillerBracket 
        trimHoses 
        trimCylinders 
        outdriveZincs
        outdriveGrounding
        bellows
        outdriveReservoir
        interiorTrimHose
        trimPump
        trimSolenoids
        trimBracket
        driveshaft
        aftHoop
        aftBearing
        forwardHoop
        forwardBearing
        shiftCables
        throttleCable
        cableBracket
        controlHead
        throttlePlacard
      }
    }
  }
`