import * as actionTypes from './constants'

const defaultState = {
  topBanner: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return {
        ...state,
        topBanner: action.banners
      }
    default:
      return state
  }
}