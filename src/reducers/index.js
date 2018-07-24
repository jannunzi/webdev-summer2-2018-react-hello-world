import {MESSAGE_1, MESSAGE_2} from '../actions'

let initialState = {
  msg: 'Carpe diem !!!!'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_1 :
      return {
        msg: 'this is message 1'
      }
    case MESSAGE_2 :
      return {
        msg: 'some other message 2'
      }
    default:
      return state
  }
}