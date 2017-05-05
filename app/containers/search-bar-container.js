import { connect } from 'react-redux'
import { updateSearchText, searchCarriers } from '../actions/actions'
import SearchBar from '../components/search-bar'

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (event) => {
      dispatch(updateSearchText(event))
    },
    onSearch: (searchText) => {
      dispatch(searchCarriers(searchText))
    }
  }
}

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer
