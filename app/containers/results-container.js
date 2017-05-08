import { connect } from 'react-redux'
import Results from '../components/results'
import { getCarrierDetails } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    carriers: state.carriers,
    activeCarrier: state.activeCarrier
  }
}

const ResultsContainer = connect(
  mapStateToProps
)(Results)

export default ResultsContainer
