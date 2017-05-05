import { connect } from 'react-redux'
import CarrierList from '../components/carrier-list'

const mapStateToProps = (state) => {
  return {
    carriers: state.carriers
  }
}

const CarrierListContainer = connect(
  mapStateToProps
)(CarrierList)

export default CarrierListContainer
