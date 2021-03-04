import * as actionTypes from './constants'
import {
  getTopBanner
} from '@/api/recommend'

const changeBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  banners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeBannerAction(res))
    })
  }
}