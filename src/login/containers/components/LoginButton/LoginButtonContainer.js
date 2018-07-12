import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { isAuthenticated } from 'login/reducers/auth'
import * as authActionCreators from 'login/actions/auth'
import * as meActionCreators from 'login/actions/me'
import {LoginButton} from 'login/components/index'

function mapStateToProps (state) {
  return {
    isAuthenticated: isAuthenticated(state),
    urlQuery: state.router.location.search
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...meActionCreators,
    ...authActionCreators
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton)