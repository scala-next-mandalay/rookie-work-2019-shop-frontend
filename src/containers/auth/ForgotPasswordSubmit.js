import { connect } from 'react-redux';
import ForgotPasswordSubmit from '../../components/auth/ForgotPasswordSubmit';
import { changeAuthState, forgotPasswordSubmit, resendSignUp } from '../../modules/auth';

export default connect(
  (state) => ({
    authState: state.auth.authState,
    loading: state.auth.loading,
    error: state.auth.error,
    email: state.auth.email
  }),
  (dispatch) => ({
    changeAuthState: (value) => dispatch(changeAuthState(value)),
    forgotPasswordSubmit: (email, code, password) => dispatch(forgotPasswordSubmit(email, code, password)),
    resendSignUp: (email) => dispatch(resendSignUp(email))
  })
)(ForgotPasswordSubmit);