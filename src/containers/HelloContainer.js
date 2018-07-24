import React from 'react'
import {connect} from 'react-redux'
import {HelloWorld} from "../components/HelloWorld";
import {MESSAGE_1, MESSAGE_2} from "../actions/index"

const stateToPropertyMapper = state =>
  ({
    message: state.msg
  })

const dispatcherToPropertyMapper = dispatch =>
  ({
    sendMessage1: () => dispatch({type: MESSAGE_1}),
    sendMessage2: () => dispatch({type: MESSAGE_2})
  })

const HelloContainer =
  connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
  )(HelloWorld)

export default HelloContainer