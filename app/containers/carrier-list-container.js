import { connect } from 'react-redux'
import CarrierList from '../components/carrier-list'
import { getCarrierDetails } from '../actions/actions'



const mapDispatchToProps = (dispatch) => {
  return {
    onCarrierClick: (id) => {
      dispatch(getCarrierDetails(id))
    }
  }
}


const CarrierListContainer = connect(
  null,
  mapDispatchToProps
)(CarrierList)

export default CarrierListContainer
