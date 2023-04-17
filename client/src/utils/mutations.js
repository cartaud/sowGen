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

export const ADD_PIPING = gql`
  mutation addPiping($input: pipingBody!) {
    addPiping(input: $input) {
      seacock 
      seacockHose
      strainer 
      strainerHose
      fuelHoses 
      fuelStripping 
      flocs 
      racorHousing
      racorFilter
      fuelTank
      exhaustHose
  }
}
`

export const ADD_ENGINE = gql`
  mutation addEngine($input: engineBody!) {
    addEngine(input: $input) {
      enginePaint
      engineOil
      oilFilter
      oilHoses
      fuelFilter
      fuelHoses
      coolant
      coolantCap
      waterPump
      afterCooler
      heatExchanger
      waterHoses
      zincs
      starter
      alternator
      ecm
      motorMounts
      mountingBrackets
      turbo
      turboOilLine
      turboCoolantLine
      waterBelt
      driveBelt
      beltGuard
  }
}
`

export const ADD_ELECTRICAL = gql`
  mutation addElectrical($input: electricalBody!) {
    addElectrical(input: $input) {
      navLights
      anchorLight
      horn
      bilgePump
      pumpLed
      floatSwitch
      controlSwitches
      trimSwitches
      trimGauge
      trimLed
      trimPump
      chargingBreaker
      preHeaterBreaker
      polarityLed
      vhfRadio
      vhfAntenna
      gps
      smartcraft
      whelenControl
      whelenMic
      whelenSpeaker
      mobiDisplay
      mobiPower
      mobiData
      mobiAntenna
      strobe
      receptacles
      barrelSwitch
      batteries
      batteryCables
      batteryCharger
      interiorBreakers
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
      piping {
        seacock 
        seacockHose
        strainer 
        strainerHose
        fuelHoses 
        fuelStripping 
        flocs 
        racorHousing
        racorFilter
        fuelTank
        exhaustHose
      }
      engine {
        enginePaint
        engineOil
        oilFilter
        oilHoses
        fuelFilter
        fuelHoses
        coolant
        coolantCap
        waterPump
        afterCooler
        heatExchanger
        waterHoses
        zincs
        starter
        alternator
        ecm
        motorMounts
        mountingBrackets
        turbo
        turboOilLine
        turboCoolantLine
        waterBelt
        driveBelt
        beltGuard
      }
      electrical {
        navLights
        anchorLight
        horn
        bilgePump
        pumpLed
        floatSwitch
        controlSwitches
        trimSwitches
        trimGauge
        trimLed
        trimPump
        chargingBreaker
        preHeaterBreaker
        polarityLed
        vhfRadio
        vhfAntenna
        gps
        smartcraft
        whelenControl
        whelenMic
        whelenSpeaker
        mobiDisplay
        mobiPower
        mobiData
        mobiAntenna
        strobe
        receptacles
        barrelSwitch
        batteries
        batteryCables
        batteryCharger
        interiorBreakers
      }
    }
  }
`