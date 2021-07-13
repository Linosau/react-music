/*
 * @Author: Linosau
 * @Date: 2020-09-11 01:10:14
 * @LastEditTime: 2021-07-13 13:36:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-music/src/pages/discovery/c-pages/recommend/index.js
 */
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  getTopBannerAction
} from './store/actionCreators'

export default memo(function Recommand (props) {
  const { topBanner } = useSelector(state => ({
    topBanner: state.recommend.topBanner
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
    Recommand { topBanner.length } ahhahahaha
    </div>
  )
})

// function Recommand (props) {
//   const { topBanner, getBanner } = props

//   useEffect(() => {
//     getBanner()
//   }, [getBanner])

//   return (
//     <div>
//     Recommand {topBanner.length}
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanner: state.recommend.topBanner
// })

// const mapDispatchToProps = dispatch => ({
//   getBanner: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommand))
