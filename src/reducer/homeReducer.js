import { fillListPost } from '../action/types'

const INITIAL_STATE = {
  loading: true,
  listPost: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case fillListPost : 
      return {listPost: action.payload, loading: false}
    default :
      return state
  }
}