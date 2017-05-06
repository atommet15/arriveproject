import { connect } from 'react-redux'
import CarrierList from '../components/carrier-list'
import { getCarrierDetails } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    carriers: state.carriers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCarrierClick: (id) => {
      dispatch(getCarrierDetails(id))
    }
  }
}


const CarrierListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarrierList)

export default CarrierListContainer
