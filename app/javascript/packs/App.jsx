import { connect } from 'react-redux'
import Actions from './actions/PlanActions'
import Content from './Content.jsx'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
