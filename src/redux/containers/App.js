// eslint-disable-next-line
import React from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import User from '../../pages/user/index'
import countAction from "../actions/countAction";

// Map Redux State to component props
const mapStateToProps = state => {
    // console.log(state, 123)
    return {
        count: state.counter.count,
    }
}
// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
    return {
        counterAdd: (count) => {
            dispatch(countAction(count))
        }
    }
}
// Connect component
const App = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(User))

export default App;