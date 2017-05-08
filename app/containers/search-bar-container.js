import { connect } from 'react-redux'
import { updateSearchText, searchCarriers, clearCarriers } from '../actions/actions'
import SearchBar from '../components/search-bar'

// SearchBar needs to "subscribe" to the search text state.
const mapStateToProps = (state) => {
  return {
    searchText: state.searchText
  }
}

// the search bar needs to listen when the search text changes,
// when a search is submited, and when a clear is submited
const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (event) => {
      dispatch(updateSearchText(event))
    },
    onSearch: (searchText) => {
      dispatch(searchCarriers(searchText))
    },
    onClear: () => {
      dispatch(clearCarriers())
    }
  }
}

// wrap SearchBar with this container via the redux connect function
// to create SearchBarContainer
const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer
