import { connect } from 'react-redux'
import CarrierDetails from '../components/carrier-details'
import { getCarrierDetails } from '../actions/actions'

// CarrierDetails needs to "subscribe" to the active carrier state
const mapStateToProps = (state) => {
  return {
    carrier: state.activeCarrier
  }
}

// wrap CarrierDetails with this container via the redux connect function
// to create CarrierDetailsContainer
const CarrierDetailsContainer = connect(
  mapStateToProps
)(CarrierDetails)

export default CarrierDetailsContainer
