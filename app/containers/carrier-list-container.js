import { connect } from 'react-redux'
import CarrierList from '../components/carrier-list'
import { getCarrierDetails } from '../actions/actions'

// CarrierList needs a function to handle when the user clicks on a carrier
const mapDispatchToProps = (dispatch) => {
  return {
    onCarrierClick: (id) => {
      dispatch(getCarrierDetails(id))
    }
  }
}

// wrap CarrierList with this container via the redux connect function
// to create CarrierListContainer
const CarrierListContainer = connect(
  null,
  mapDispatchToProps
)(CarrierList)

export default CarrierListContainer
