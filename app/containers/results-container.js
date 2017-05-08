import { connect } from 'react-redux'
import Results from '../components/results'
import { getCarrierDetails } from '../actions/actions'

// Results needs to "subscribe" to the carriers list state
// and the active carrier state
const mapStateToProps = (state) => {
  return {
    carriers: state.carriers,
    activeCarrier: state.activeCarrier
  }
}
// wrap Results with this container via the redux connect function
// to create ResultsContainer
const ResultsContainer = connect(
  mapStateToProps
)(Results)

export default ResultsContainer
