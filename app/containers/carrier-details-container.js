import { connect } from 'react-redux'
import CarrierDetails from '../components/carrier-details'
import { getCarrierDetails } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    carrier: state.activeCarrier
  }
}

const CarrierDetailsContainer = connect(
  mapStateToProps
)(CarrierDetails)

export default CarrierDetailsContainer
